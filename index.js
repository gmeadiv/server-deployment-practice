'use strict';

const app = require('./app.js');
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log('Running on PORT ', PORT)
})