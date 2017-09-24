var mongoose = require('mongoose');

var repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String,
  ownerId: Number,
  ownerName: String,
  html_url: String,
  updated_at: Date
});

var Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;