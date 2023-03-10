const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const port = process.env.PORT || 6000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

module.exports = app;
