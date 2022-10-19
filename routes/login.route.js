const express = require('express');
const router = express.Router();
const { getSessions, validationCredentials, destroySession } = require('../models/user.model');
const { authMiddleware, guestMiddleware } = require('../middlewares/auth.middleware');

router.get('/', authMiddleware, async (req, res) => {
  res.render('login');
});

router.post('/', authMiddleware, async (req, res) => {
  try{
    const userData = await validationCredentials(req.body);
    const session_result = await getSessions();

    req.session.authUser = {
      username: userData.username,
      email: userData.email,
      session_id: session_result.session_id
    };

    res.redirect('/dashboard'); 
  }catch(err){ 
    
    console.log(err);
    res.redirect('/login'); 
  }
});

router.get('/logout', guestMiddleware, async (req, res) => {
  try{
    const session_id = req.session.authUser.session_id; 
    const response = await destroySession(session_id);
    console.log(response);
    req.session.destroy();
  }catch(err){
    console.log(err);
  }

  res.render('login');
});




module.exports = router;
