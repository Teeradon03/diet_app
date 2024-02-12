const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    gender: String,
    dateOfBirth : Date,
    phone: Number,
    targetWeight: Number,
    height: Number,
    weight: Number,
    bmi: Number,
    bmiIndex: String,
    bmr: Number,
    role: { type : String, default: 'user'} ,
    userId : {
        type : String,
        required: true,
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
    line_user_id : { type: String, required: true},
    line_username: String,
    line_picture_url: String,
    line_email: String,
})  

const User = mongoose.model("User", userSchema)
module.exports = {
    User
} 