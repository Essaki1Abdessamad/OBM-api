'use strict';
const { request } = require('express')
const express = require('express')
const router = express.Router()
const {GoogleAdsApi} = require('google-ads-api');

router.get('/GetCampaings', async (req , res) => {
  
/*     const GADS_CLIENT_ID = '63661522472-pncobsrhgenbvam93in2diuk1q9s0dpq.apps.googleusercontent.com'
    const GADS_CLIENT_SECRET = 's2Gt-H8iU_NxI6lqM-tUe2d5'
    const GADS_DEVELOPER_TOKEN = 'Ks8Uig1E41qoue0mD1h_xw'
    const GADS_CID = "182-227-6425"
    const GADS_LOGIN_CUSTOMER_ID = '962-925-6325' 
    const GADS_REFRESH_TOKEN = '1//03gTUVdqYV9PkCgYIARAAGAMSNwF-L9IrLu9V6jhL6xKHG-6fYpOCLUYajRBXiCdhQ4P7XRrTPyc5uVbMjZ_gBssnmZcy7BpBToA'

 */
    async function foo() {
      try {
   
        const client = new GoogleAdsApi({
          client_id: '63661522472-pncobsrhgenbvam93in2diuk1q9s0dpq.apps.googleusercontent.com',
          client_secret: 's2Gt-H8iU_NxI6lqM-tUe2d5',
          developer_token: 'Ks8Uig1E41qoue0mD1h_xw'
        })
      
        const customer = client.Customer({
          customer_id : '6007133550',
          refresh_token: '1//03-umNzGxPpB-CgYIARAAGAMSNwF-L9IrXEfyXCbAYhTDf57BjmD35DwWWqEM-W3G-51sdd3UqHzwjVONsIGhs7coSmQjNzxTQUI'
        })
        
        // Wait for the result to come back, using await

       
            const campaigns = await customer.query(`
            SELECT 
              campaign.name, campaign.status
            FROM 
              campaign
            `)
            console.log(campaigns)
            res.send(campaigns)
            
          } catch(error) {
            console.log(error)
          }
        }
        
        
        foo()
        
       

})


module.exports = router