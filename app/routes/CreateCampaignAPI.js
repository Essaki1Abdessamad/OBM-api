'use strict';
const { request } = require('express')
const express = require('express')
const router = express.Router()
const bizSdk = require('facebook-nodejs-business-sdk');
const AdAccount = bizSdk.AdAccount;
const Campaign = bizSdk.Campaign;
var constants = require('../resources/data')




router.post('/createCampaign', async (req , res) => {

  const access_token = constants.access_token;
  const id = constants.id;

    const api = bizSdk.FacebookAdsApi.init(access_token);
    const showDebugingInfo = true; // Setting this to true shows more debugging info.
    if (showDebugingInfo) {
      api.setDebug(true);
    }
    
    const logApiCallResult = (apiCallName, data) => {
     // console.log(apiCallName);
      if (showDebugingInfo) {
        //console.log('Data:' + JSON.stringify(data));
      }
    };
    
    let fields, params;
    fields = [
    ];
    params = {
        name : req.body.name,
        objective : req.body.objective,
        status : req.body.params,
        special_ad_categories : [],
    };

    const campaigns =  (new AdAccount(id)).createCampaign(
      fields,
      params
    )
    .then(data => res.json(data))
    .catch(error => res.json(error));

    logApiCallResult('campaigns api call complete.', campaigns);

})


module.exports = router