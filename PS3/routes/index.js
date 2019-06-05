var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Zhilin Guo's CS591 PS3" });
});

module.exports = router;
