const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
require('dotenv').config();

const app = express();

app.set("view engine", "ejs");
app.set('port', process.env.PORT || 3000);
app.set('host', process.env.HOST || 'localhost');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(session({
    secret: process.env.SESSION_SECRET || 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false 
    }
}))
module.exports = app;