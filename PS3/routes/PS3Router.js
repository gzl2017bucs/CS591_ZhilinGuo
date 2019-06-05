const express = require('express');
const router = express.Router();

//GET method for ps3
router.get('/', (req, res, next) => {
    res.render('ps3get', { string: 'My first GET method!' });
});

//POST method for ps3
router.post('/', (req, res, next) => {
    res.render('ps3post', {string: req.body.string, stringLength: req.body.string.length});
});

module.exports = router;