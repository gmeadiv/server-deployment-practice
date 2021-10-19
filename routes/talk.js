'use strict';

module.exports = function(request, response) {
  let words = request.body.words || request.query.words;

  response.send(words);
}