const { request } = require('express')
const express = require('express')
const router = express.Router()
var constants = require('../resources/data')


router.post('/updateCampaignAPI/:id', async (req , res) => {

    const access_token = constants.access_token;

    var request = require('request');

    const id = req.params.id;

    var options = {
        url: 'https://graph.facebook.com/v10.0/'+id,
        method: 'POST',
        form: {
            access_token: access_token,
                name : req.body.name,
                objective : req.body.objective,
                status : req.body.params,
        }
    };

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.send("UPDATE SUCC !!")

        }
    }

    request(options, callback);


      
    

})


module.exports = router