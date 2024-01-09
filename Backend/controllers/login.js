


exports.login = (req,res) => {
    const data = req.body
    try{
        if (!data){
            res.send("Please login ")
        }
        else{
            userId = '12335435264536456fdgdfg'
            req.session.userId = 
            res.send('req.session.userId '+ req.session.userId )
        }
    }
    catch(error){
        res.status(500).send("Error" )
    }

}