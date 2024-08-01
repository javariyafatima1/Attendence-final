const verifyToken = require('../middlewares/verifyToken')
const { Router } = require("express")
const router = Router();
const { markAttendance } = require("../controllers/attendanceController")
router.post('/markAttendance', verifyToken, markAttendance);

module.exports = router;