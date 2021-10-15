const AdCreativeModel = require('../models/adCreative');
const { request } = require('express')
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router()

router.get('/getAdCreative', async (req, res) => {
    const adCreative = await AdCreativeModel.find()
    res.send(adCreative);
  });


router.post('/saveAdCreative', async (req , res) => { {

    let adCreative = new AdCreativeModel({ 
        idAdCreative : req.body.idAdCreative,
        name : req.body.name,
        idPage: req.body.idPage,
        image_hash : req.body.image_hash,
        message : req.body.message,

    });
    adCreative.save();
    res.send(adCreative);
    console.log("data Saved !!",adCreative);
  }

})


router.put('/updateAdCreative', async (req, res) => {

    const adCreative = await AdCreativeModel.findOneAndUpdate(req.body.idAdCreative,
      { 
        name : req.body.name,
        idPage : req.body.idPage,
        image_hash : req.body.image_hash,
        message : req.body.message,

      }, { new: true });
  
    if (!adCreative) return res.status(404).send('The adCreative with the given ID was not found.');
    
    res.send(adCreative);
})


router.delete('/deleteAdCreative', async (req , res) => {

  const adCreative = await AdCreativeModel.findOneAndDelete(req.body.idAdCreative);

  if (!adCreative) return res.status(404).send('The adCreative with the given ID was not found.');

  res.send(adCreative);

})

  module.exports = router; 