


exports.login = async (req,res) => {

    try{
        console.log('login in login')
        const data = req.body;
        // console.log(data);
        req.session.userId = 'asdsdfsdfasf'
        console.log("req.session.userId", req.session.userId);
    }
    catch(error){
        res.status(500).send("Error" )
    }

}