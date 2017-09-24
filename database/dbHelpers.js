var mongoose = require('mongoose');
var Repo = require('../database/index');

exports.save = function(data) {
  for(var i=0; i<data.length; i++) {
    var newRepo = new Repo({
      id: data[i].id,
      name: data[i].name,
      ownerId: data[i].owner.id,
      ownerName: data[i].owner.login,
      html_url: data[i].html_url,
      updated_at: data[i].updated_at
    });
    newRepo.save(function(err, newRepo) {
      if (err) {
        console.log(err)
      }
    });
  }
}