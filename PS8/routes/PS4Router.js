const express = require('express');
const router = express.Router();
const request = require("request");

//import config file
const ps4config = require('../config/ps4config');

//import API key and values from config file
//API documentation at
//https://developer.valvesoftware.com/wiki/Steam_Web_API
const APIkey = ps4config.key;
const APIsteamid = ps4config.steamid;
const APIformat = ps4config.format;

//GET method for ps4 that uses promise to call a single API and displays the result
router.get('/', function(req, res, next) {
    const callAPI = new Promise(function (resolve, reject) {

        const options = { method: 'GET',
            url: 'http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/',
            qs:
                {
                    key: APIkey,
                    steamid: APIsteamid,
                    format: APIformat
                },
        };

        request(options,(error, response, body) => {
            if (error) throw new Error(error);

            // parsing returned JSON file
            let result = body;

            //logging parsed JSON file to console
            console.log (JSON.parse(result));

            //return promise object that is resolved with the given value
            resolve(result);
        })

    })

    //let words = 'Total number of Steam games that this account owns';
    let words = 'content returned by API:';
    callAPI.then(result => res.render('ps4get', { string1: words, string2: JSON.parse(result).response.total_count }))

    //test rendering calls for debugging
    // callAPI.then(val => {
    //     res.render('ps4test', { string1: result.appid });
    // })

});


module.exports = router;
