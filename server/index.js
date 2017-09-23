var express = require('express');
var morgan = require('morgan');
var parser = require('body-parser');
var request = require('request');
var mongoose = require('mongoose');
var db = require('../database/index');
var app = express();

app.use(morgan('dev'));
app.use(parser.urlencoded());
app.use(express.static(__dirname + '/../client/dist'));


app.post('/repos/import', function (req, res) {
  // TODO
  console.log(req.body);
  var username = req.body.search;
  var url = 'https://api.github.com/users/'+username+'/repos'
  var options = { method: 'GET',
  url: url,
  headers:
  {
    'user-agent': 'sirajkakeh',
     'cache-control': 'no-cache',
     'content-type': 'application/json' },
     form: { d: '1' }
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    var temp = JSON.parse(body);
    temp=temp[0];

    db.findOne({id : }).exec(function(err, found) {
    if (found) {
      res.status(200).send(found);
    } else {
      util.getUrlTitle(uri, function(err, title) {
        if (err) {
          console.log('Error reading URL heading: ', err);
          return res.sendStatus(404);
        }
        var newLink = new Link({
          url: uri,
          title: title,
          baseUrl: req.headers.origin,
          visits: 0
        });
        newLink.save(function(err, newLink) {
          if (err) {
            res.status(500).send(err);
          } else {
            res.status(200).send(newLink);
          }
        });
      });
    }
  });
    res.end(JSON.stringify(temp));
  });
});

app.get('/repos', function (req, res) {
  // TODO
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
