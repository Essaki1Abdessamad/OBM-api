const { request } = require('express')
const express = require('express')
const router = express.Router()
var constants = require('../resources/data')

router.delete('/deleteAdsAPI/:idAds', async (req , res) => {

    const access_token = constants.access_token;

    var request = require('request');

    const idADS = req.params.idAds;

    var options = {
        url: 'https://graph.facebook.com/v10.0/'+idADS,
        method: 'DELETE',
        form: {
            access_token: access_token,
            //arg:'SpecialStuff'
        }
    };

    
    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.send("Deleted succ From fb")



        }
        else(
            console.log(error)
        )
    }

    request(options, callback);


      
    

})


module.exports = router