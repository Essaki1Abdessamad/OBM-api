const { request } = require('express')
const express = require('express')
const router = express.Router()
var constants = require('../resources/data')

router.get('/searchInterestsAPI', async (req , res) => {


    const access_token = constants.access_token;
    
    var request = require('request');
    const location_types =req.query.location_types;
    const q = req.query.q;

    var options = {
        url: `https://graph.facebook.com/v10.0/search?type=adinterest&q=${q}&access_token=${access_token}`
    };
    
    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body)
        }
    }
    
    request(options, callback);
    

})


module.exports = router