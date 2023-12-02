const express = require('express')
const bodyParser = require('body-parser')
const cookie = require('cookie-parser')
const app = express();
const port = 9999
const form_info_route = require('./routes/formRoute')
const customerRouter = require('./routes/customerKeyRoute')
app.use(cookie())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json()); 

/// กันติด CORS 
app.use((req, res, next) => {
    // Allow requests from http://localhost:5173
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  
app.use('/', customerRouter)


app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})

