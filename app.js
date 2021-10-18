'use strict';

const express = require('express');
const app = express();

app.post('/talk', function (request, response, next) {
  response.send('ok')
})

module.exports = app;