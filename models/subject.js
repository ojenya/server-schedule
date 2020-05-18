const mongoose = require('mongoose');


const subjectSchema = new mongoose.Schema({
    subject_name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
    },
    type: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'teacher',
        // WARNING
        select: false,
    },
    room: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
    },
    group: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'group',
        // WARNING
        select: false,
    },
    start: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
    },
    end: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
    },
    day: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
    },
    weektype: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
    },

});