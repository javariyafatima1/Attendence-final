const { Router } = require("express")
const verifyToken = require("../middleware/verifyToken")
const router = Router();

const { signupUser, loginUser, getUserData } = require("../controllers/user")
router.post('/signup', signupUser)
router.post('/login', loginUser)
router.get('/getUserData', verifyToken, getUserData)


module.exports = router