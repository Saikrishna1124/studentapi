const mongoose = require('mongoose');

const studentschema = new mongoose.Schema({

    studentid: {
        type: Number,
        required: true,
        unique: true
    },

    studentname: {
        type: String,
        required: [true, "Student name should not be blank"]
    },

    department: {
        type: String,
        required: [true, "Department should not be blank"]
    },

    semester: {
        type: Number,
        required: [true, "Semester should not be blank"]
    },

    cgpa: {
        type: Number,
        required: [true, "CGPA should not be blank"]
    },

    registered_on: {
        type: Date,
        default: new Date()
    }

})

module.exports = mongoose.model('student', studentschema);