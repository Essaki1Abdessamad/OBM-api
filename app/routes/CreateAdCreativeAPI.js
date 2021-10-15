const express = require('express')
const router = express.Router()
'use strict';
const bizSdk = require('facebook-nodejs-business-sdk');
const AdAccount = bizSdk.AdAccount;
const AdCreative = bizSdk.AdCreative;
var constants = require('../resources/data')


router.post('/adCreativeAPI', async (req , res) => {

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
  "name": req.body.name,
  "object_story_spec":{
    "page_id":req.body.idPage,
    "link_data":{
       "image_hash": req.body.image_hash,
       "link":"https://facebook.com/"+req.body.idPage,
       "message": req.body.message
    }
 }
};
const adcreatives = (new AdAccount(id)).createAdCreative(
  fields,
  params
)
.then(data => res.json(data))
.catch(error => {
  res.status(500),
  res.send(error)
});


logApiCallResult('adcreatives api call complete.', adcreatives);

})





module.exports = router