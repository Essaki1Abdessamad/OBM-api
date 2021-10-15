const CompaingData = require('../models/campaings');
const { request } = require('express')
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router()

router.post('/saveCampaign', async (req , res) => { {

    let compaingData = new CompaingData({ 

      idCompaign : req.body.idCompaign,
      name : req.body.name,
      objective : req.body.objective,
      status : req.body.status

    });
    compaingData.save();
    res.send(compaingData);
    console.log("data Saved !!",compaingData);
  }

})


router.put('/updateCampaign', async (req, res) => {

  const Compaing = await CompaingData.findByIdAndUpdate(req.body._id,
    { 
      name: req.body.name,
      objective: req.body.objective,
      status: req.body.status
    }, { new: true });

  if (!Compaing) return res.status(404).send('The Compaing with the given ID was not found.');
  
  res.send(Compaing);
})



router.get('/getCampaign', async (req, res) => {
  const campaigns = await CompaingData.find()
  res.send(campaigns);
});



router.delete('/deleteCampaignFBdb/:id', async (req , res) => {

  const Campaign = await CompaingData.findByIdAndRemove(req.params.id);

  if (!Campaign) return res.status(404).send('The campaign with the given ID was not found.');

  res.send(Campaign);

})

  module.exports = router