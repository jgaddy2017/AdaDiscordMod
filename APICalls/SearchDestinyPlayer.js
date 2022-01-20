
const axios = require('axios');
require('dotenv');
const myAPIKey = process.env.APIKEY;

async function SearchDestinyPlayer(playerName, code){
    let itemName = ""
    const config = {
        method: 'POST',
        url: 'https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayerByBungieName/3/',
        headers: {'X-API-Key': myAPIKey},
        data: {displayName: playerName, displayNameCode: code}
    }
    let res = await axios(config);
    //itemName = res.data.Response.data.inventoryItem.itemName;

    console.log(res.data);
    //console.log(res.data.Response.vendors);
}
module.exports = SearchDestinyPlayer