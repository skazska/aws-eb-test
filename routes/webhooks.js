var express = require('express');
var router = express.Router();


router.get('/facebook', function (req, res) {
  console.log('query');
  console.log(JSON.stringify(req.query));
  console.log('headers');
  console.log(JSON.stringify(req.headers));
  if (req.query['hub.verify_token'] === '123321') {
    res.send(req.query['hub.challenge']);
  } else {
    res.send('Error, wrong validation token');
  }
});

module.exports = router;
