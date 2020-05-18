const mongoose = require('mongoose');


const teacherSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
    },
    secondName: {
        type: String,
        required: false,
        minlength: 2,
        maxlength: 30,
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,

    },

});