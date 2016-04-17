var express = require('express');
var router = express.Router();


app.get('/facebook', function (req, res) {
  if (req.query['hub.verify_token'] === '123321') {
    res.send(req.query['hub.challenge']);
  } else {
    res.send('Error, wrong validation token');
  }
});

module.exports = router;
