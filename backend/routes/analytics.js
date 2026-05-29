const router = require('express').Router();
const Item = require('../models/Item');
const User = require('../models/User');

router.get('/dashboard', async (req, res) => {
  try {
    const [totalItems, lostItems, foundItems, totalUsers, recentItems] = await Promise.all([
      Item.countDocuments(),
      Item.countDocuments({ type: 'lost' }),
      Item.countDocuments({ type: 'found' }),
      User.countDocuments(),
      Item.find().sort({ createdAt: -1 }).limit(5)
    ]);

    // Category breakdown
    const categoryData = await Item.aggregate([
      { $group: { _id: '$category', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 8 }
    ]);

    // Daily trend last 7 days
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const dailyTrend = await Item.aggregate([
      { $match: { createdAt: { $gte: sevenDaysAgo } } },
      { $group: {
        _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
        lost: { $sum: { $cond: [{ $eq: ['$type','lost'] }, 1, 0] } },
        found: { $sum: { $cond: [{ $eq: ['$type','found'] }, 1, 0] } }
      }},
      { $sort: { _id: 1 } }
    ]);

    // Recovery rate
    const recoveredItems = await Item.countDocuments({ status: 'approved' });
    const recoveryRate = totalItems > 0 ? Math.round((recoveredItems / totalItems) * 100) : 0;

    res.json({
      totalItems, lostItems, foundItems, totalUsers,
      recoveredItems, recoveryRate,
      categoryData, dailyTrend, recentItems
    });
  } catch(e) { res.status(500).json({ message: e.message }); }
});

module.exports = router;
