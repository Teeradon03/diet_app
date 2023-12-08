const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    fName: String,
    lName: String,
    data_of_birth : Date,
    phone: Number,
    height: Number,
    weight: Number,
    age: Number,
    bmi: Number,
    bmi_index: String,
    calories: Number,
    
    userid : String,
    imageUrl: String,
    username: String,

    email: String,
})

module.exports = mongoose.model('User', userSchema)