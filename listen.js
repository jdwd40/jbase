const app = require('./app');

app.listen(9090, (err) => {
  if (err) throw err;
  console.log(`Listening on port 9090...`);
});