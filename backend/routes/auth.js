const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const makeToken = (user) => jwt.sign(
  { id: user._id, email: user.email, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: '24h' }
);

router.post('/signup', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role)
      return res.status(400).json({ message: 'All fields are required.' });
    if (await User.findOne({ email }))
      return res.status(400).json({ message: 'Email already registered.' });
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed, role });
    res.json({ token: makeToken(user), user: { id: user._id, name, email, role, isAdmin: false } });
  } catch(e) { res.status(500).json({ message: e.message }); }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid email or password.' });
    if (!await bcrypt.compare(password, user.password))
      return res.status(401).json({ message: 'Invalid email or password.' });
    res.json({ token: makeToken(user), user: { id: user._id, name: user.name, email, role: user.role, isAdmin: user.isAdmin } });
  } catch(e) { res.status(500).json({ message: e.message }); }
});

router.post('/register', async (req, res) => {
  try {
    const { name, email, campusId, role } = req.body;
    if (!name || !email || !campusId || !role)
      return res.status(400).json({ message: 'All fields are required.' });
    if (await User.findOne({ email }))
      return res.status(400).json({ message: 'Email already registered.' });
    const hashed = await bcrypt.hash(campusId, 10);
    await User.create({ name, email, password: hashed, role, campusId });
    res.json({ message: 'Registered successfully.' });
  } catch(e) { res.status(500).json({ message: e.message }); }
});

module.exports = router;
