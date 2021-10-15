'use strict';
const { request } = require('express')
const express = require('express')
const router = express.Router()
const {GoogleAdsApi,resources,enums,toMicros,ResourceNames,MutateOperation,} = require('google-ads-api');

router.get('/AccessibleCustomers', async (req , res) => {

        const client = new GoogleAdsApi({
          client_id: '63661522472-pncobsrhgenbvam93in2diuk1q9s0dpq.apps.googleusercontent.com',
          client_secret: 's2Gt-H8iU_NxI6lqM-tUe2d5',
          developer_token: 'Ks8Uig1E41qoue0mD1h_xw'
        })
      
        const refreshToken = "1//03-umNzGxPpB-CgYIARAAGAMSNwF-L9IrXEfyXCbAYhTDf57BjmD35DwWWqEM-W3G-51sdd3UqHzwjVONsIGhs7coSmQjNzxTQUI"

        const customers = await client.listAccessibleCustomers(refreshToken);

        console.log(customers)
        res.send(customers)
    

})


module.exports = router