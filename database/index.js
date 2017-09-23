var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: { type: Number, index: { unique: true } },
  name: String,
  ownerId: Number,
  ownerName: String,
  html_url: String,
  updated_at: Date
});

var Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;