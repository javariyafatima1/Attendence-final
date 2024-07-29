const User = require  ('../controllers/user');
const router = express.Router();
const bcrypt = require('bcryptjs');

router.post('/signup', async (req, res) => {
    const { name, email, password  } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ name, email, password:hashedPassword });
      await user.save()
      .then(() => res.status(200).json({ message: 'User created successfully' }))
  } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try{
        const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid email or password' });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid email or password' });
    }catch{
        res.status(500).json({ error: err.message });
    }

  });