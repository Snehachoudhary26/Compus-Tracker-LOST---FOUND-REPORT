const router = require('express').Router();
const Item = require('../models/Item');
const User = require('../models/User');

router.get('/stats', async (req, res) => {
  try {
    const total   = await Item.countDocuments();
    const lost    = await Item.countDocuments({ type: 'lost' });
    const found   = await Item.countDocuments({ type: 'found' });
    const users   = await User.countDocuments();
    const flagged = await Item.countDocuments({ flagged: true });
    res.json({ total, lost, found, users, flagged });
  } catch(e) { res.status(500).json({ message: e.message }); }
});

router.get('/items', async (req, res) => {
  try { res.json(await Item.find().sort({ createdAt: -1 })); }
  catch(e) { res.status(500).json({ message: e.message }); }
});

router.put('/items/:id/approve', async (req, res) => {
  try {
    await Item.findByIdAndUpdate(req.params.id, { status: 'approved', flagged: false });
    res.json({ message: 'Approved.' });
  } catch(e) { res.status(500).json({ message: e.message }); }
});

router.delete('/items/:id', async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted.' });
  } catch(e) { res.status(500).json({ message: e.message }); }
});

router.get('/users', async (req, res) => {
  try { res.json(await User.find().select('-password')); }
  catch(e) { res.status(500).json({ message: e.message }); }
});

module.exports = router;
