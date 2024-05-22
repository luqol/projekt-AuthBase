const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {

  if (req.user){
    console.log('res user: ' + JSON.stringify(req.user));
    res.render('logged');
  } else {
    res.redirect('/user/no-permission')
  }
  
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', (req, res) => {
  if (req.user){
    console.log('Name: ' + req.user.displayName);
    res.render('profile');
  } else {
    res.redirect('/user/no-permission')
  }
});

router.get('/profile/settings', (req, res) => {
  if (req.user){
    console.log('Name: ' + req.user.displayName);
    res.render('settings');
  } else {
    res.redirect('/user/no-permission')
  }
});

module.exports = router;