const AdsetsData = require('../models/adsets');
const Ads = require('../models/ads');
const CompaingData = require('../models/campaings');
const { request } = require('express')
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router()

router.post('/saveAdsets', async (req , res) => { {

    let adsetsData = new AdsetsData({ 
        adSetID : req.body.adSetID,
        idCampaign: req.body.campaignId,
        nameCampaign: req.body.nameCampaign,
        name : req.body.name,
        optimization_Goal : req.body.optimizationGoal,
        billing_Event : req.body.billingEvent,
        bid_Amount : req.body.bidAmount,
        daily_Budget : req.body.dailyBudget,
        audiences_Key : req.body.audiencesKey,
        audiences_Name : req.body.audiencesName,
        location_Type : req.body.locationType,
        interests_ID : req.body.interestsId,
        interests_Name : req.body.interestsName,
        status: req.body.status,
        start_time: Date.now,

    });
    adsetsData.save();
    res.send(adsetsData);
    console.log("data Saved !!",adsetsData);
  }

})


router.get('/getAdsets', async (req, res) => {
  const adsets = await AdsetsData.find()
  res.send(adsets);
});

router.get('/getAdsetsID', async (req, res) => {
  const adsets = await AdsetsData.find({idCompaign : req.query.idCompaign})
  res.send(adsets);
});


router.put('/updateAdsetsDB', async (req, res) => {

  const adsets = await AdsetsData.findOneAndUpdate(req.body.adSetID,
    { 
      name : req.body.name,
      optimization_Goal : req.body.optimizationGoal,
      billing_Event : req.body.billingEvent,
      bid_Amount : req.body.bidAmount,
      daily_Budget : req.body.dailyBudget,
      audiences_Key : req.body.audiencesKey,
      audiences_Name : req.body.audiencesName,
      location_Type : req.body.locationType,
      interests_ID : req.body.interestsId,
      interests_Name : req.body.interestsName,
      status: req.body.status,
    }, { new: true });

  if (!adsets) return res.status(404).send('The adsets with the given ID was not found.');
  
  res.send(adsets);
})


router.delete('/deleteAdsetsDB', async (req , res) => {

  const adsets = await AdsetsData.findOneAndDelete(req.body.adSetID);

  if (!adsets) return res.status(404).send('The adsets with the given ID was not found.');

  res.send(adsets);

})

router.delete('/manyDeleteAdsetsDB/:id', async (req , res) => {

  const adsets = await AdsetsData.deleteMany({idCampaign : req.params.id});

  if (!adsets) return res.status(404).send('The adsets with the given Campaign id was not found.');

  res.send(adsets);

})


 router.delete('/DeleteCampagne/:id', async(req, res) => {
  const adsets = await AdsetsData.find({idCampaign : req.params.id});

  if (!adsets) return res.status(404).send('The adsets with the given Campaign id was not found.');

  let adsetsIds = []
  adsets.map((adset) => {
    adsetsIds.push(adset.adSetID)
  })
  await Ads.deleteMany({adset_id : { $in : adsetsIds }})
  await AdsetsData.deleteMany({ adSetID : { $in : adsetsIds } })
  await CompaingData.findOneAndDelete(req.body.compaignId)

  res.send('success')
  
})


module.exports = router