const mongoose = require('mongoose');

const ads = new mongoose.Schema({

    idAds : {
        type: String,
        required: true
    },
    name : {
        type: String,
        required: true
    },
    adset_id : {
      type: String,
      required: true
    },
    adset_Name : {
      type: String,
      required: true
    },
    creative_id : {
      type: String,
      required: true
    },
    creative_Name : {
      type: String,
      required: true
    },
    status : {
      type: String,
      required: true
    },
    date: {
      type: Date, 
      default: Date.now}


  }); 
  

  module.exports = mongoose.model('Ads', ads);