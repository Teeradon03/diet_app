const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    data_of_birth : Date,
    phone: Number,
    height: Number,
    weight: Number,
    bmi: Number,
    bmi_index: String,
    calories: Number,
    user_id : {
        type : Number,
        required: false,
    },
    ///// user data from line 
    line_user_id : String,
    line_username: String,
    line_picture_url: String,
    line_email: String,
})  

module.exports = mongoose.model('User', userSchema)