const { request } = require('express')
const express = require('express')
const router = express.Router()
var constants = require('../resources/data')


router.post('/updateAdsetsAPI/:id', async (req , res) => {

    const access_token = constants.access_token;

    var request = require('request');

    const adsetsID = req.params.id;

    var options = {
        url: 'https://graph.facebook.com/v10.0/'+adsetsID,
        method: 'POST',
        form: {
            access_token: access_token,
            name: req.body.name,
            optimization_goal: req.body.optimizationGoal,
            billing_event: req.body.billingEvent,
            bid_amount: req.body.bidAmount,
            daily_budget: req.body.dailyBudget,
            campaign_id: req.body.campaignId,
            targeting:"{\"geo_locations\": {\""+req.body.locationType+"\":"+req.body.audiencesKey+"}, \"interests\": "+req.body.interests+"}", 
            start_time: Date.now,
            status: req.body.status
        }
    };

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.send("UPDATE SUCC !!")

        }
        else{
            res.send(error)
            console.log(response.body)
        }
            
            
    }

    request(options, callback);


      
    

})


module.exports = router