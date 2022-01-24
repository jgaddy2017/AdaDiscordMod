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
//const getcharacterIds = require('./APICalls/GetCharacterIds');
const searchDestinyPlayer = require('./APICalls/SearchDestinyPlayer');
const getPlayerMods = require('./APICalls/GetPlayerMods');
const getCurrentUser = require('./APICalls/GetCurrentUser');
const Oauth = require('./Oauth');

let itemID = '2979281381';
let playerID = '21059811'
let chrisMembershipID = '4611686018487538722';
let chrisCharacterId = '2305843009446664091';
let adaId = '350061650'
//getInventoryItemName(itemID);
//playerInformation(playerID);
//vendorInformation();
//getcharacterIds(chrisMembershipID);
//getPlayerMods(destinyMembershipID);
//getAdasDailyMods(destinyMembershipID, playerID, adaId);
//getAdasDailyMods(adaId);
//EntityDefinition('this doesnt matter');

//searchDestinyPlayer('Darkguard190', '3556');

const ClientID = process.env.CLIENT_ID;

const credentials = {key: privateKey, cert: certificate};
// A sample route

app.get('/', (req, res) => {
    //earchDestinyPlayer('Darkguard190', '3556', adaId, req.query.code, res);
    Oauth(adaId, req.query.code, res);
});

const httpsServer = https.createServer(credentials, app);
// Start the Express server
httpsServer.listen(3000, () => console.log('Server running on port 3000!'));
//searchDestinyPlayer('Dakiroenus');

///////ADA-1 number: 350061650


