const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    dataOfBirth : Date,
    phone: Number,
    height: Number,
    weight: Number,
    bmi: Number,
    bmiIndex: String,
    calories: Number,
    userId : {
        type : Number,
        required: false,
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    ///// user data from line 
    line_user_id : { type: String, required: true},
    line_username: String,
    line_picture_url: String,
    line_email: String,
})  

const User = mongoose.model('User', userSchema)
module.exports = {
    User
} 