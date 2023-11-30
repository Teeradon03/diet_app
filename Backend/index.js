const express = require('express');
const db = require('./model/db'); // Change the path based on your file structure
const bodyParser = require('body-parser')
const PORT = 2222
const app = express();

const controller = require('./controllers/dbController')

// app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())

const Cat = db.model('Cat', { name: String });

// สร้าง instance จาก model
const kitty = new Cat({ name: 'JavaScript' });

// save ลง database (return เป็น Promise)
kitty.save().then(() => console.log('meow'));


app.get('/', (req,res) => {
    // res.json(db)
})

app.listen(PORT, () =>  {
    console.log(`App listening on port ${PORT}`)
})