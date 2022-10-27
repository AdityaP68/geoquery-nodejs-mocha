const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes/routes')

const app = express()
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/muber')

app.use(bodyParser.json())

// good way to remove the routing logic from the main configuration file 
routes(app)


module.exports = app