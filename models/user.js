const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    vk_id: {
        type: String,
        required: false,
        minlength: 2,
        maxlength: 30,
    },
    tg_id: {
        type: String,
        required: false,
        minlength: 2,
        maxlength: 30,
    },
    user_group: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'group',
        // WARNING
        select: false,
    },

});