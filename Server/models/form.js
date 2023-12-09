
const { Timestamp, BSON, Double } = require('mongodb')
const mongoose = require('mongoose')

const formSchema = mongoose.Schema({
    age_range : String,
    if_knowledge : String,
    beakfast_time : String,
    lunch_time : String,
    dinner_time : String,
    workout_times : String,
    sleeping_time : String,
    weight_control : String,
    goal_lose_weight : String,
    dietary_restriction : {
        type : [String]
    },
    chronic_disease : {
        type : [String]
    },
    your_goal_lose_weight : String,
    your_goal_lose_fat : String,
    your_goal_is_heathy : String,
    your_goal_is_strngthen_muscle : String,
    your_shape_is_thin : String,
    your_shape_is_slime : String,
    your_shape_is_chubby : String,
    your_shape_is_fat : String,
    you_wanna_slime_down_your_bottom : String,
    you_wanna_slime_down_your_thigh : String,
    you_wanna_slime_down_your_chest : String,
    you_wanna_slime_down_your_abdomen : String,
    sit_for_most_all_day : String,
    stand_for_most_all_day : String,
    walk_for_most_all_day : String,
    stretching_for_most_all_day : String,
    drink_23_glasses_water : String,
    drink_45_glasses_water : String,
    drink_67_glasses_water : String,
    drink_8_glasses_water : String,
    drink_soda : String,
    drink_beer : String,
    eating_dessert: String,
    eating_fried_food: String,
    you_have_back_pain : String,
    you_have_knee_pain : String,
    you_have_arm_pain : String,
    you_have_leg_pain : String,
    you_have_backache : String,
    you_have_joint_pain: String,
    date_of_birth : Date,
    weight : Number,
    height: Number
    
}, {Timestamp : true})

module.exports = mongoose.model('Form', formSchema)