const express = require('express');
const router = express.Router();
const { guestMiddleware } = require('../middlewares/auth.middleware');

router.get('/', guestMiddleware, (req, res) => {

  res.render('dashboard', {
    authUser: req.session.authUser
  });
});


module.exports = router;
