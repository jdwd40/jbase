const cors = require('cors');
const express = require('express');
const {getUsers, getUserById, newUser} = require('./controllers/userControllers')
const bodyParser = require("body-parser")
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get('/users', getUsers);

app.get('/users/:user_id', getUserById);

app.post('/users/', newUser);

module.exports = app;