const Attendance = require('../schema/attendencescema');
const markAttendance = async (req, res) => {
    const { studentId, course, date } = req.body;
    try {
        const newAttendance = new Attendance({ studentId, course, date });
        const savedAttendance = await newAttendance.save();
        res.status(200).send({
            message: "Attendance marked successfully",
            attendance: savedAttendance,
        });
    }catch(error){

    }
}