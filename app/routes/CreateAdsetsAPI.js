const { request } = require('express')
const express = require('express')
const router = express.Router()
var constants = require('../resources/data')

router.post('/createAdsetsAPI', async (req , res) => {

    const access_token = constants.access_token;
    const id = constants.id;

    var request = require('request');

    const idAcc = req.query.idAcc;

    var options = {
        url: `https://graph.facebook.com/v10.0/${idAcc}/adsets`,
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
            console.log("This is the id of the Adsets",body);
            res.send(response)
        }
        else {
            res.status(500).send(body)
            console.log("the error",response.body)
        }
    }

    request(options, callback);


      
    

})


module.exports = router