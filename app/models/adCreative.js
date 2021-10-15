const mongoose = require('mongoose');

const adCreative = new mongoose.Schema({

    idAdCreative : {
        type: String,
        required: true
    },

    name : {
      type: String,
      required: true
    },
    idPage : {
      type: String,
      required: true
    },
    image_hash : {
      type: String
    },
    message :  {
      type: String
    },
    date: {
      type: Date, 
      default: Date.now}


  }); 
  

  module.exports = mongoose.model('AdCreatives', adCreative);