const express = require('express');
const router = express.Router();
const request = require("request");

//import config file
const ps4config = require('../config/ps4config');

//This API does not work
//import API key and values from config file
//API documentation at
//https://developer.valvesoftware.com/wiki/Steam_Web_API
// const appid = ps4config.appid;
// const count = ps4config.count;
// const format = ps4config.format;
// const maxlength = ps4config.maxlength;

//Current API values
const APIurl = ps4config.APIurl;
const APIhost = ps4config.APIhost;

//GET method for ps4 that uses promise to call a single API and displays the result
router.get('/', function(req, res, next) {
    const callAPI = new Promise(function (resolve, reject) {

        const options = { method: 'GET',
            url: APIurl,
            headers:
                { 'cache-control': 'no-cache',
                    Connection: 'keep-alive',
                    'accept-encoding': 'gzip, deflate',
                    Host: APIhost,
                    'Postman-Token': '19fe3885-df77-43a2-8757-c4dde3d3a61a,2f016dd9-7be7-4365-9e1d-bc729e5e0b28',
                    'Cache-Control': 'no-cache',
                    Accept: '*/*',
                    'User-Agent': 'PostmanRuntime/7.13.0' } };

        request(options,(error, response, body) => {
            if (error) throw new Error(error);

            // parsing returned JSON file
            let result = JSON.parse(body);

            //logging parsed JSON file to console
            console.log (result);

            //return promise object that is resolved with the given value
            resolve(result);
        })

    })

    //let words = 'Total number of Steam games that this account owns';
    let words = 'content returned by API:';
    callAPI.then(result => res.render('ps4get', { string1: words, string2: result.employee_name }))

    //test rendering calls for debugging
    // callAPI.then(val => {
    //     res.render('ps4test', { string1: result.appid });
    // })

});


module.exports = router;