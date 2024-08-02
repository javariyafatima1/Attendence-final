const { Router } = require("express")
const verifyToken = require("../middleware/verifyToken")
const router = Router();

const { signupUser, loginUser, getUserData,Adminsignup,adminlogin, } = require("../controllers/user")
router.post('/signup', signupUser)
router.post('/login', loginUser)
router.get('/getUserData', verifyToken, getUserData)
router.post('/adminsignup', Adminsignup)
router.post('/adminlogin', adminlogin)


module.exports = router