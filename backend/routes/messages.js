const router = require('express').Router();
const Message = require('../models/Message');

router.post('/', async (req, res) => {
  try {
    const { senderId, senderName, receiverId, receiverName, content } = req.body;
    if (!content) return res.status(400).json({ message: 'Content required.' });
    const msg = await Message.create({ senderId, senderName, receiverId, receiverName, content });
    res.json(msg);
  } catch(e) { res.status(500).json({ message: e.message }); }
});

router.get('/conversation', async (req, res) => {
  try {
    const { userId1, userId2 } = req.query;
    const msgs = await Message.find({
      $or: [
        { senderId: userId1, receiverId: userId2 },
        { senderId: userId2, receiverId: userId1 }
      ]
    }).sort({ createdAt: 1 });
    res.json(msgs);
  } catch(e) { res.status(500).json({ message: e.message }); }
});

router.get('/unread/:userId', async (req, res) => {
  try {
    const count = await Message.countDocuments({ receiverId: req.params.userId, read: false });
    res.json({ count });
  } catch(e) { res.status(500).json({ message: e.message }); }
});

module.exports = router;
