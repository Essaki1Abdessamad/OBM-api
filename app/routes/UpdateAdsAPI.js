const { request } = require('express')
const express = require('express')
const router = express.Router()
var constants = require('../resources/data')


router.post('/updateAdsAPI/:id', async (req , res) => {

    const access_token = constants.access_token;

    var request = require('request');

    const adsID = req.params.id;

    var options = {
        url: 'https://graph.facebook.com/v10.0/'+adsID,
        method: 'POST',
        form: {
            access_token: access_token,
            name: req.body.name,
            creative_id: req.body.creative_id,
            status: req.body.status
        }
    };

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.send("UPDATE SUCC !!")

        }
        else(console.log(response.body))
    }

    request(options, callback);


      
    

})


module.exports = router