var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(_req, res, _next) {
  res.render('index', { title: 'Map' });
});

module.exports = router;
