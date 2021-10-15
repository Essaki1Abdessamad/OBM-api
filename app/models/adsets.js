const mongoose = require('mongoose');

const adsetsModel = new mongoose.Schema({

    idCampaign:{
      type: String,
      required: true
    },
    nameCampaign:{
      type: String,
      required: true
    },
    adSetID: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    optimization_Goal:  {
      type: String,
      required: true
    },
    billing_Event: {
      type: String,
      required: true
    },
    bid_Amount: {
        type: String,
        required: true
    },
    daily_Budget: {
        type: String,
        required: true
    },
    audiences_Key: {
        type: String,
        required: true
    },
    audiences_Name: {
      type: String,
      required: true
  },
    location_Type: {
        type: String,
        required: true
    },
    interests_ID: {
        type: String,
        required: true
    },
    interests_Name: {
      type: String,
      required: true
  },
    status: {
        type: String,
        required: true
    },
    startTime: {
      type: Date, 
      default: Date.now},

  date: {
    type: Date, 
    default: Date.now}}); 
  

  module.exports = mongoose.model('Adsets', adsetsModel);