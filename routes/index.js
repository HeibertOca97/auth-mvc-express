var express = require('express');
var router = express.Router();
//var getSessions = require('../models/user.model')

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.username = 'Heibert Ocana';
  req.session.rol = 'admin';
  req.session.views = req.session.views ? ++req.session.views : 1;
  
  //getSessions();

  res.render('index', { user: req.session });
});

module.exports = router;
