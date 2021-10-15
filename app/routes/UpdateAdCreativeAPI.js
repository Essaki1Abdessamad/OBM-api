const { request } = require('express')
const express = require('express')
const router = express.Router()
var constants = require('../resources/data')


router.post('/updateAdCreativeAPI', async (req , res) => {

    const access_token = constants.access_token;

    var request = require('request');

    const idAdCreative = req.body.idAdCreative;

    var options = {
        url: 'https://graph.facebook.com/v10.0/'+idAdCreative,
        method: 'POST',
        form: {
            access_token: access_token,
                name : req.body.name,
                object_story_spec:{
                    page_id : req.body.page_id,
                    link_data :{
                        image_hash : req.body.image_hash,
                        link:"https://facebook.com/"+req.body.idPage,
                         message: req.body.message
                    }
                },
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