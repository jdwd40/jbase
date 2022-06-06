const cors = require('cors');
const express = require('express');
const {getUsers} = require('./controllers/userControllers')

const app = express();
app.use(cors());
app.use(express.json());

app.get('/users', getUsers);

//app.get('/users/:user_id', getUserById);

module.exports = app;