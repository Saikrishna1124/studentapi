const Student = require('../models/student');


// CREATE STUDENT
exports.createStudent = async (req, res) => {
    try {

        const { studentid, studentname, department, semester, cgpa } = req.body;

        if (studentid == '' || studentname == '' || department == '' || semester == '' || cgpa == '') {
            return res.status(400).json({
                success: false,
                message: 'All properties required!'
            })
        }

        const exists = await Student.findOne({ studentid: studentid })

        if (exists) {
            return res.status(400).json({
                success: false,
                message: 'Student ID already exists'
            })
        }

        const result = await Student.create({
            studentid: req.body.studentid,
            studentname: req.body.studentname,
            department: req.body.department,
            semester: req.body.semester,
            cgpa: req.body.cgpa
        })

        return res.status(200).json({
            success: true,
            student: result,
            message: 'Student created successfully'
        })

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


// GET ALL STUDENTS
exports.getAllStudents = async (req, res) => {
    try {

        const students = await Student.find();

        return res.status(200).json({
            success: true,
            students: students
        })

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


// GET STUDENT BY ID
exports.getStudentByID = async (req, res) => {

    const studentid = req.params.sid;

    try {

        const student = await Student.findOne({ studentid: studentid });

        if (student) {

            return res.status(200).json({
                success: true,
                student: student
            })

        }
        else {

            return res.status(401).json({
                success: false,
                message: `Student id ${studentid} not found`
            })

        }

    }
    catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        })

    }

}


// UPDATE STUDENT
exports.updateStudent = async (req, res) => {

    try {

        const search = await Student.findOne({ studentid: req.params.sid })

        if (search) {

            const updrec = await Student.updateOne(
                { studentid: req.params.sid },
                {
                    $set: {
                        studentname: req.body.studentname,
                        department: req.body.department,
                        semester: req.body.semester,
                        cgpa: req.body.cgpa
                    }
                }
            )

            return res.status(200).json({
                success: true,
                message: 'Student updated successfully'
            })

        }
        else {

            return res.status(401).json({
                success: false,
                message: 'Student not found'
            })

        }

    }
    catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        })

    }

}


// DELETE STUDENT
exports.deleteStudent = async (req, res) => {

    const sid = req.params.sid;

    try {

        await Student.findOneAndDelete({ studentid: sid })

        return res.status(200).json({
            success: true,
            message: 'Student deleted successfully'
        })

    }
    catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        })

    }

}