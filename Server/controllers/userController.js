const User = require('../models/user')


exports.loginLine = async(req, res) => {

    try{
        const { userId, displayName, pictureUrl } = req.body
        /// get user information from line
        var userData = {
            user_id: userId,
            username: displayName,
            image_url: pictureUrl
        }
        var user = await User.findOneAndUpdate({user_id: userId}, {new: true})
        /// some session 
        req.session.userId = user.user_id
        console.log('UserId Session',req.session)

        console.log('UserData', userData)
        /// กรณีที่มี user ในระบบแล้ว
        if (user){
            console.log("User updated")
            
        /// กรณีไม่มี user ในระบบให้ทำการสร้างใหม่
        }else{
            user = new User(userData);
            await user.save()
            console.log("User saved")
        }
    }
    catch(error) {
        console.log(error)
        res.status(500).send("Server error: " + error)
    }

}