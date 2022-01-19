require('dotenv').config()

const getInventoryItemName = require('./APICalls/GetInventoryItemName');
const playerInformation = require('./APICalls/PlayerInformation');
const vendorInformation = require('./APICalls/VendorInformation');
const getcharacterIds = require('./APICalls/GetCharacterIds');
const searchDestinyPlayer = require('./APICalls/SearchDestinyPlayer');
const getPlayerMods = require('./APICalls/GetPlayerMods');
const getAdasDailyMods = require('./APICalls/GetAdasDailyMods');
const EntityDefinition = require('./APICalls/EntityDefinition');
const Oauth = require('./Oauth');

let itemID = '3875551374';
let playerID = '21059811'
let destinyMembershipID = '4611686018487538894';
let adaId = '350061650'
//getInventoryItemName(itemID);
//playerInformation(playerID);
//vendorInformation();
getcharacterIds(destinyMembershipID);
//getPlayerMods(destinyMembershipID);
//getAdasDailyMods(destinyMembershipID, playerID, adaId);
//getAdasDailyMods();
//EntityDefinition('this doesnt matter');
//searchDestinyPlayer('Dakiroenus');
//Oauth();
///////ADA-1 number: 350061650
