
const axios = require('axios');
const getcharacterIds = require('./GetCharacterIds');
require('dotenv');
const myAPIKey = process.env.APIKEY;

async function SearchDestinyPlayer(playerName, nameCode, adaId, code, res){
    let itemName = ""
    const config = {
        method: 'POST',
        url: 'https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayerByBungieName/3/',
        headers: {'X-API-Key': myAPIKey},
        data: {displayName: playerName, displayNameCode: nameCode}
    }
    let result = await axios(config).then(response => {
        let membershipID = response.data.Response[0].membershipId;
        getcharacterIds(membershipID, adaId, code, res);
    });
    //itemName = res.data.Response.data.inventoryItem.itemName;

    //console.log(res.data.Response.vendors);
}
module.exports = SearchDestinyPlayer