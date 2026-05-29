const router = require('express').Router();
const Notification = require('../models/Notification');

router.get('/:userId', async (req, res) => {
  try {
    const notifs = await Notification.find({ userId: req.params.userId })
      .sort({ createdAt: -1 }).limit(20);
    res.json(notifs);
  } catch(e) { res.status(500).json({ message: e.message }); }
});

router.put('/read/:id', async (req, res) => {
  try {
    await Notification.findByIdAndUpdate(req.params.id, { read: true });
    res.json({ message: 'Marked as read.' });
  } catch(e) { res.status(500).json({ message: e.message }); }
});

router.put('/read-all/:userId', async (req, res) => {
  try {
    await Notification.updateMany({ userId: req.params.userId }, { read: true });
    res.json({ message: 'All marked as read.' });
  } catch(e) { res.status(500).json({ message: e.message }); }
});

router.get('/unread-count/:userId', async (req, res) => {
  try {
    const count = await Notification.countDocuments({ userId: req.params.userId, read: false });
    res.json({ count });
  } catch(e) { res.status(500).json({ message: e.message }); }
});

module.exports = router;
