var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Service = require('./../models/services')
const SliderBanner = require('../models/banners')
const ServiceSlider = require('../models/service_sliders')

/* GET home page. */
router.get('/services', function(req, res) {
  Service.find().then(services=>{
    res.send({success:true,services})
  })
});

/* GET home page. */
router.get('/slider-banners', function(req, res) {
  SliderBanner.find().then(sliderBanners=>{
    res.send({success:true,sliderBanners})
  })
});

/* GET home page. */
router.get('/service-sliders', function(req, res) {
  ServiceSlider.find().then(serviceSliders=>{
    res.send({success:true,serviceSliders})
  })
});



module.exports = router;
