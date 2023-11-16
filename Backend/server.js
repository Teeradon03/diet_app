const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 9999

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())

app.listen(port , (req, res) => {
    console.log(`app running on port ${port}`)
})