const mongoose = require('mongoose');

const compaingModel = new mongoose.Schema({

    idCompaign: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    objective:  {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    date: {
      type: Date, 
      default: Date.now}

  }); 

  module.exports = mongoose.model('Campaings', compaingModel);