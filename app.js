require('dotenv').config();
const express = require('express');
const fs = require('fs');
const https = require('https');
const open = require('open');
const privateKey  = fs.readFileSync('./certs/selfsigned.key');
const certificate = fs.readFileSync('./certs/selfsigned.crt');

// Create Express app
const app = express();


const getInventoryItemName = require('./APICalls/GetInventoryItemName');
const playerInformation = require('./APICalls/PlayerInformation');
const vendorInformation = require('./APICalls/VendorInformation');
const getcharacterIds = require('./APICalls/GetCharacterIds');
const searchDestinyPlayer = require('./APICalls/SearchDestinyPlayer');
const getPlayerMods = require('./APICalls/GetPlayerMods');
//const getAdasDailyMods = require('./APICalls/GetAdasDailyMods');
//const EntityDefinition = require('./APICalls/EntityDefinition');
const Oauth = require('./Oauth');

let itemID = '2979281381';
let playerID = '21059811'
let destinyMembershipID = '4611686018487538722';
let myCharacterId = '2305843009446664091';
let adaId = '350061650'
let code = 'c8c0a6af790e0fe38ef9ebf82c7c8e8b';
//getInventoryItemName(itemID);
//playerInformation(playerID);
//vendorInformation();
//getcharacterIds(destinyMembershipID);
//getPlayerMods(destinyMembershipID);
//getAdasDailyMods(destinyMembershipID, playerID, adaId);
//getAdasDailyMods(adaId);
//EntityDefinition('this doesnt matter');

//searchDestinyPlayer('Darkguard190', '3556');
const ClientID = process.env.CLIENT_ID;

const credentials = {key: privateKey, cert: certificate};
// A sample route

app.get('/', (req, res) => {
    if(req.query.code == undefined)
        open(`https://www.bungie.net/en/OAuth/Authorize?client_id=${ClientID}&response_type=code`,"_self");
    Oauth(destinyMembershipID, myCharacterId, adaId, req.query.code);

    res.send('Now using https..');
});

const httpsServer = https.createServer(credentials, app);
// Start the Express server
httpsServer.listen(3000, () => console.log('Server running on port 3000!'));
//searchDestinyPlayer('Dakiroenus');

///////ADA-1 number: 350061650
