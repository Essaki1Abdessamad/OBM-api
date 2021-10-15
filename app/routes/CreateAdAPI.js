'use strict';
const express = require('express')
const router = express.Router()
const bizSdk = require('facebook-nodejs-business-sdk');
const AdAccount = bizSdk.AdAccount;
const Ad = bizSdk.Ad;
var constants = require('../resources/data')


router.post('/createAdAPI', async (req , res) => {

    const access_token = constants.access_token;
    const id = constants.id;

const api = bizSdk.FacebookAdsApi.init(access_token);
const showDebugingInfo = true; // Setting this to true shows more debugging info.
if (showDebugingInfo) {
  api.setDebug(true);
}

const logApiCallResult = (apiCallName, data) => {
  console.log(apiCallName);
  if (showDebugingInfo) {
    console.log('Data:' + JSON.stringify(data));
  }
};


let fields, params;
fields = [
];
params = {
  'name' : req.body.name,
  'adset_id' : req.body.adset_id,
  'creative' : {'creative_id':req.body.creative_id},
  'status' : req.body.status
};
const ads = (new AdAccount(id)).createAd(
  fields,
  params
)
.then(data => res.json(data))
.catch(error => {
  res.status(500),
  res.send(error)
});

// Campaing with conversions Goal Need pexils

logApiCallResult('ads api call complete.', ads);

})



module.exports = router