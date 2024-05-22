const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {

  if (req.user){
    //console.log('res user: ' + JSON.stringify(req.user, null, 2));
    res.render('logged', {name: req.user.displayName, avatar: req.user.photos[0].value});

  } else {
    res.redirect('/user/no-permission')
  }
  
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', (req, res) => {
  if (req.user){
    //console.log('Name: ' + req.user.displayName);
    res.render('profile');
  } else {
    res.redirect('/user/no-permission')
  }
});

router.get('/profile/settings', (req, res) => {
  if (req.user){
    //console.log('Name: ' + req.user.displayName);
    res.render('settings');
  } else {
    res.redirect('/user/no-permission')
  }
});

module.exports = router;