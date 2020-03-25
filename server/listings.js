const mongoose = require('./db');

const Listing = mongoose.model('Listing', new mongoose.Schema({
  images: [{
    url: String,
    description: String
  }]
}, { timestamps: true }));

module.exports = Listing;