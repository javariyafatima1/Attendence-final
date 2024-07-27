const User = require('../models/user');
const router = express.Router();


router.post('/signup', async (req, res) => {
    const { name, email, password  } = req.body;
    try {
   
      const user = new User({ name, email, password });
      await user.save()
      .then(() => res.status(200).json({ message: 'User created successfully' }))
  } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });