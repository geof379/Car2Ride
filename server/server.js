#!/usr/bin/env node

var debug = require('debug')('passport-mongo');
var app = require('./app');


app.set('port', process.env.PORT || 8080);


var server = app.listen(app.get('port'), function() {
  debug('Car riding on port ' + server.address().port);
});
