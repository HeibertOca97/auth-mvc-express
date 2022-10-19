const express = require('express');
const router = express.Router();
const { create } = require('../models/user.model');
const { authMiddleware } = require('../middlewares/auth.middleware');

router.get('/', authMiddleware, async (req, res) => {
  console.log(req.session);
  res.render('register');
});

router.post('/', authMiddleware, async (req, res) => {
  try{
    await create(req.body);
  }catch(err){ 
    console.log(err);
  }
    res.redirect('/register'); 
});

module.exports = router;
