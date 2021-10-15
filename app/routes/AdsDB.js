const Ads = require('../models/ads');
const { request } = require('express')
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router()

router.post('/saveAds', async (req , res) => { {

    let ads = new Ads({ 
        idAds : req.body.idAds,
        name : req.body.name,
        adset_id : req.body.adset_id,
        adset_Name : req.body.adset_Name,
        creative_id : req.body.creative_id,
        creative_Name : req.body.creative_name,
        status : req.body.status,
        date : req.body.date,

    });
    ads.save();
    res.send(ads);
    console.log("data Saved !!",ads);
  }

})


router.get('/getAd', async (req, res) => {
  const ads1 = await Ads.find()
  res.send(ads1);
});


router.get('/getAdID', async (req, res) => {
    const ads1 = await Ads.find({adset_id : req.query.adSetID})
    res.send(ads1);
});


router.put('/updateAdsDB', async (req, res) => {

  const ads = await Ads.findOneAndUpdate(req.body.idAds,
    { 
      name: req.body.name,
      creative_id: req.body.creative_id,
      status: req.body.status,
    }, { new: true });

  if (!ads) return res.status(404).send('The ads with the given ID was not found.');
  
  res.send(ads);
})


router.delete('/deleteAdsDB', async (req , res) => {

  const AdsDB = await Ads.findOneAndDelete(req.body.idAds);

  if (!AdsDB) return res.status(404).send('The ads with the given ID was not found.');

  res.send(AdsDB);

})


router.delete('/manyDeleteAdsDB/:id', async (req , res) => {

  const ADS = await Ads.deleteMany({adset_id : req.params.id});

  if (!ADS) return res.status(404).send('The ads with the given adsets id was not found.');

  res.send(ADS);

})


module.exports = router