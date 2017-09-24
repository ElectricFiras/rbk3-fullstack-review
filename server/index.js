var express = require('express');
var morgan = require('morgan');
var parser = require('body-parser');
var request = require('request');
var mongoose = require('mongoose');
var db = require('../database/dbConfig');
var Repo = require('../database/index');
var dbHelpers = require('../database/dbHelpers');
var ghHelper = require('../helpers/github');
var requestHandlers = require('../helpers/request-handlers');
var app = express();

app.use(morgan('dev'));
app.use(parser.urlencoded());
app.use(express.static(__dirname + '/../client/dist'));


app.post('/repos/import', function (req, res) {
  // TODO
  ghHelper.getReposGH(requestHandlers.optionsGenerator(req), function(data) {
    dbHelpers.save(data);
  });
  res.redirect('/');
});

app.get('/repos', function (req, res) {
  // TODO
  Repo.find({}).exec(function(err, repos) {
    res.status(200).send(repos);
  });
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
