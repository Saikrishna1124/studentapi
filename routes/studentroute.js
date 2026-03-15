const express = require('express');
const router = express.Router();

const {
    createStudent,
    getAllStudents,
    getStudentByID,
    updateStudent,
    deleteStudent
} = require('../controllers/studentcontroller');

router.post('/createstudent', createStudent);

router.get('/getallstudents', getAllStudents);

router.get('/getstudent/:sid', getStudentByID);

router.put('/updstudent/:sid', updateStudent);

router.delete('/delstudent/:sid', deleteStudent);

module.exports = router;