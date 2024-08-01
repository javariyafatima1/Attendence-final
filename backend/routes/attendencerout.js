const { Router } = require("express")
const verifyToken = require('../middleware/verifyToken')

const router = Router();
const { markAttendance } = require("../controllers/attendanceController")
router.post('/markAttendance', verifyToken, markAttendance);

module.exports = router;