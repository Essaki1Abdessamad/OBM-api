'use strict';
const { request } = require('express')
const express = require('express')
const router = express.Router()
const { GoogleAdsApi,resources, enums, ResourceNames } = require("google-ads-api");

router.post('/CreateCampaigns', async (req , res) => {

  const client = new GoogleAdsApi({
    client_id: '63661522472-pncobsrhgenbvam93in2diuk1q9s0dpq.apps.googleusercontent.com',
    client_secret: 's2Gt-H8iU_NxI6lqM-tUe2d5',
    developer_token: 'Ks8Uig1E41qoue0mD1h_xw'
  })

  const customer = client.Customer({
    customer_id : '6007133550',
    refresh_token: '1//03-umNzGxPpB-CgYIARAAGAMSNwF-L9IrXEfyXCbAYhTDf57BjmD35DwWWqEM-W3G-51sdd3UqHzwjVONsIGhs7coSmQjNzxTQUI'
  })
  
   
// Creating the entity

const campaign = {
  name: 'My campaign',
  network_settings: {
    target_content_network: true,
    target_google_search: false,
    target_partner_search_network: false,
    target_search_network: false,
  }
}

// Passing in a single entity to create
const result = await customer.campaigns.create(campaign)



})


module.exports = router