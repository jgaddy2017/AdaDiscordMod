require('dotenv').config();

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
Oauth(destinyMembershipID, myCharacterId, adaId, code)
//searchDestinyPlayer('Dakiroenus');

///////ADA-1 number: 350061650
