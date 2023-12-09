
/// model
const Form = require('../models/form')


/// controller


exports.list = async (req,res) => {
    
    try{
        const listForm = await Form.find({}).exec()
        console.log("Get data successfully")
        res.json(listForm)
    }
    catch (error){
        console.log(error)
        res.status(400).json({error: error})
    }
}

exports.create = async (req,res) => {
    const data = req.body
    try{
        const createForm = await new Form(data).save()
        console.log("created successfully")
        res.json(createForm)

    }
    catch (error){
        console.log(error)
        res.status(400).json({error: error})
    }
}

