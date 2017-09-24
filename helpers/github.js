var request = require('request');
var express = require('express');
var parser = require('body-parser');


exports.getReposGH = function (options, callback) {
  request(options, function (error, response, body) {
  if (error) throw new Error(error);
  var temp = JSON.parse(body);
  callback(temp);
  });
}
