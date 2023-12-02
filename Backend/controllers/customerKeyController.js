const conn = require('../model/db')

const controller = {};


controller.key = (req,res) => {
    const data = req.body
    console.log(data)
    res.json(data)
}

module.exports = controller