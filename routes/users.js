var express = require('express');
var router = express.Router();
const User = require('../models/users');
const bodyParser = require('body-parser');


/* GET users listing. */
router.get('/user', function(req, res, next) {
  User.find().then(users=>{
      console.log(users,'2222')
       res.send({success:true,users})
  })
});



module.exports = router;
