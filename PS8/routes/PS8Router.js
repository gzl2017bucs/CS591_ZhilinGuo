const express = require('express');
const router = express.Router();
const request = require("request");

//import config file
const ps8config = require('../config/ps8config');

//import API key and values from config file
//API documentation at
//https://developer.valvesoftware.com/wiki/Steam_Web_API
const APIkey = ps8config.key;
const APIsteamid = ps8config.steamid;
const APIformat = ps8config.format;

// import mongo db
const db = require('../mongo/mongo');

// connect to db
db.connect((err, client) => {
    if (err) {
        console.log(`ERR: ${err}`);
    } else {
        console.log(`Connected`);
    }
});

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
    let words1 = 'Most Played Steam Game in Two Weeks: ';
    let words2 = 'Play Time in Two Weeks: '
    callAPI.then(result => res.render('ps8get', {
        string1: words1 + JSON.parse(result).response.games[0].name,
        string2: words2 + Math.round(((JSON.parse(result).response.games[0].playtime_2weeks)/60)*10)/10 + ' hours'
    }))

    //test rendering calls for debugging
    // callAPI.then(val => {
    //     res.render('ps4test', { string1: result.appid });
    // })

});


module.exports = router;
