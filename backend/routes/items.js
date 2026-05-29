const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const QRCode = require('qrcode');
const Item = require('../models/Item');
const Notification = require('../models/Notification');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, '../uploads')),
  filename: (req, file, cb) => cb(null, Date.now() + '_' + file.originalname)
});
const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });

// AI Smart Matching — text similarity score
function smartMatch(item1, item2) {
  const text1 = `${item1.name} ${item1.description} ${item1.category} ${item1.location}`.toLowerCase();
  const text2 = `${item2.name} ${item2.description} ${item2.category} ${item2.location}`.toLowerCase();
  const words1 = new Set(text1.split(/\s+/).filter(w => w.length > 2));
  const words2 = new Set(text2.split(/\s+/).filter(w => w.length > 2));
  const intersection = [...words1].filter(w => words2.has(w)).length;
  const union = new Set([...words1, ...words2]).size;
  const jaccard = union > 0 ? intersection / union : 0;
  const categoryBonus = item1.category === item2.category ? 0.3 : 0;
  const score = Math.min(Math.round((jaccard + categoryBonus) * 100), 99);
  return Math.max(score, item1.category === item2.category ? 45 : 10);
}

router.post('/', upload.single('image'), async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.file) data.imageUrl = '/uploads/' + req.file.filename;

    const item = await Item.create(data);

    // Generate QR Code
    const qrData = `http://localhost:3001/item-detail.html?id=${item._id}`;
    const qrPath = path.join(__dirname, '../uploads', `qr_${item._id}.png`);
    await QRCode.toFile(qrPath, qrData, { width: 300, margin: 2, color: { dark: '#FF8A26', light: '#FFFFFF' } });
    await Item.findByIdAndUpdate(item._id, { qrCode: `/uploads/qr_${item._id}.png` });

    // AI Smart Matching — find matches automatically
    const oppositeType = data.type === 'lost' ? 'found' : 'lost';
    const candidates = await Item.find({ type: oppositeType });
    const matches = candidates
      .map(c => ({ item: c, score: smartMatch(item, c) }))
      .filter(m => m.score >= 40)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);

    // Send real-time notification if match found
    const io = req.app.get('io');
    if (matches.length > 0 && data.email) {
      const notif = await Notification.create({
        userId: data.email,
        type: 'match',
        title: '🎯 Match Found!',
        message: `We found ${matches.length} potential match(es) for your ${data.type} item "${data.name}"`,
        itemId: item._id.toString(),
        icon: '🎯'
      });
      io.to(data.email).emit('notification', notif);
    }

    // Notify opposite side
    for (const match of matches.slice(0, 2)) {
      if (match.item.email) {
        const notif = await Notification.create({
          userId: match.item.email,
          type: 'match',
          title: '🔍 Possible Match Found!',
          message: `Someone reported a ${data.type} item that might match your ${match.item.type} "${match.item.name}"`,
          itemId: item._id.toString(),
          icon: '🔍'
        });
        io.to(match.item.email).emit('notification', notif);
      }
    }

    res.json({
      message: 'Item reported successfully.',
      id: item._id,
      qrCode: `/uploads/qr_${item._id}.png`,
      matches: matches.map(m => ({ ...m.item.toObject(), matchScore: m.score }))
    });
  } catch(e) { res.status(500).json({ message: e.message }); }
});

router.get('/', async (req, res) => {
  try {
    const filter = {};
    if (req.query.type) filter.type = req.query.type;
    if (req.query.status) filter.status = req.query.status;
    res.json(await Item.find(filter).sort({ createdAt: -1 }));
  } catch(e) { res.status(500).json({ message: e.message }); }
});

router.get('/smart-match/:itemId', async (req, res) => {
  try {
    const item = await Item.findById(req.params.itemId);
    if (!item) return res.status(404).json({ message: 'Item not found.' });
    const opposite = item.type === 'lost' ? 'found' : 'lost';
    const candidates = await Item.find({ type: opposite });
    const matches = candidates
      .map(c => ({ ...c.toObject(), matchScore: smartMatch(item, c) }))
      .filter(m => m.matchScore >= 30)
      .sort((a, b) => b.matchScore - a.matchScore);
    res.json(matches);
  } catch(e) { res.status(500).json({ message: e.message }); }
});

router.get('/search', async (req, res) => {
  try {
    const { q, type, category } = req.query;
    const filter = {};
    if (type) filter.type = type;
    if (category) filter.category = category;
    if (q) filter.$or = [
      { name: { $regex: q, $options: 'i' } },
      { description: { $regex: q, $options: 'i' } },
      { location: { $regex: q, $options: 'i' } }
    ];
    res.json(await Item.find(filter).sort({ createdAt: -1 }).limit(50));
  } catch(e) { res.status(500).json({ message: e.message }); }
});

router.put('/:id/status', async (req, res) => {
  try {
    await Item.findByIdAndUpdate(req.params.id, { status: req.body.status });
    res.json({ message: 'Status updated.' });
  } catch(e) { res.status(500).json({ message: e.message }); }
});

router.delete('/:id', async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted.' });
  } catch(e) { res.status(500).json({ message: e.message }); }
});

module.exports = router;
