const express = require('express');
const router = express.Router();
const request = require("request");

//import config file
const ps8config = require('../config/ps8config');

//import API key and values from config file
//API documentation at
//https://developer.valvesoftware.com/wiki/Steam_Web_API
const APIkey = ps8config.key;
//const APIsteamid = ps8config.steamid;
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

//GET method for ps8 that uses promise to call two chained APIs and return JSON object to front end
router.get('/:SteamID', function(req, res, next) {
    // calling mongoDB
    let mongo = db.getDB();

    // search for current SteamID in mongoDB
    mongo.collection('steamusers').find({SteamID: req.params.SteamID}).
    toArray(function(err, docs) {
        // test whether SteamID is already in mongoDB
        if (docs.length > 0) { // data is 'cached' in mongoDB, send it
            // print for debugging
            console.log(docs[0]);
            // send
            res.send(docs[0]);
        } else { // data is not 'cached' in mongoDB, cache it and send it
            getRecentGamesFromAPI(req.params.SteamID)
                .then(function (result) {
                    // create document in JSON
                    let currentDocument = {
                        SteamID: req.params.SteamID,
                        mostPlayedGame2Week: JSON.parse(result).response.games[0].name,
                        mostPlayedGame2WeekPlayeTime: Math.round(((JSON.parse(result).response.games[0].playtime_2weeks)/60)*10)/10,
                        newsTitleForGame: 'Placeholder for second API', // for second API
                        cached: 0
                    }
                    // send new document to front end
                    res.send(currentDocument);

                    // changes 'cached' field to 1, and cache document into mongoDB
                    currentDocument.cached = 1;
                    mongo.collection('steamusers').insertOne(currentDocument);

                })

                .catch(function (err) {
                    console.log(`ERROR! ${err}`);

                });
        }
    });

    //PUG rendering calls
    //let words = 'Total number of Steam games that this account owns';
    // let words1 = 'Most Played Steam Game in Two Weeks: ';
    // let words2 = 'Play Time in Two Weeks: '
    // recentGames.then(result => res.render('ps8get', {
    //     string1: words1 + JSON.parse(result).response.games[0].name,
    //     string2: words2 + Math.round(((JSON.parse(result).response.games[0].playtime_2weeks)/60)*10)/10 + ' hours'
    // }))
});


//method to get recently played games using the first API
const getRecentGamesFromAPI = function (inputID){
        return new Promise (function (resolve, reject) {
            const options = { method: 'GET',
                url: 'http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/',
                qs:
                    {
                        key: APIkey,
                        steamid: inputID,
                        format: APIformat
                    },
            };
            request(options,(error, response, body) => {
                if (error) {
                    throw new Error(error);
                } else {
                    // parsing returned JSON file
                    let result = body;
                    //logging parsed JSON file to console
                    console.log(JSON.parse(result));
                    //return promise object that is resolved with the given value
                    resolve(result);
                }
            })
            }
        )
};


module.exports = router;
