const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

const { PORT } = require('./config');

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
