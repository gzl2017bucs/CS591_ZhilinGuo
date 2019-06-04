var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    //res.send('./ps3/get for PS3 1.b. GET method, ./ps3/post for PS3 1.c POST method');
    res.render('PS3Router', { title: 'Problem Set 3 Page', context: 'question 2 and 3 are under ./Question2 and ./Question3' });
});

router.get('/get', function(req, res, next) {
    res.send('ps3 router test');
});

module.exports = router;