const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(9090, () => console.log('App listening on port 9090!'));

const factorize = (num) => {
  return num * num;
};

module.exports = factorize;
