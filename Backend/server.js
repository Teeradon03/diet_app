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
  host: '147.50.231.17',
  user: 'nano_admin',
  database: 'nano_diet',
  password: 'nano_pass',
  port:3306,
}, 'single')) 




app.use('/', form_info_route)


app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})

