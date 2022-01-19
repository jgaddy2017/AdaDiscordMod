const axios = require('axios');
require('dotenv');
async function EntityDefinition(itemHash){


    const myAPIKey = process.env.APIKEY;
    const config = {
        method: 'GET',
        url: 'https://www.bungie.net/platform/Destiny2/Manifest/DestinyInventoryItemDefinition/4282387390/',
        headers: {'X-API-KEY': myAPIKey},
    }
    let res = await axios(config);
    console.log(res.data);
}

module.exports = EntityDefinition;