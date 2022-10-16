const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/authenticate', (req, res) => {

  res.status(200).json(req.body);
});

module.exports = router;
