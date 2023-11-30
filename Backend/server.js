const express = require('express')
const bodyParser = require('body-parser')
const cookie = require('cookie-parser')
const session = require('express-session')
const mysql = require('mysql2')
const connection = require('express-myconnection')
const app = express();
const port = 9999


const form_info_route = require('./routes/formRoutes')

app.use(cookie())
app.use(session({ secret: 'nano_pass' }))
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json()); 

app.use(connection(mysql, {
  host: '127.0.0.1',
  user: 'diet_nano',
  database: 'mydb',
  password: 'diet_nano@pass',
  port:3306,
}, 'single')) 

app.use('/', form_info_route)


app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})

