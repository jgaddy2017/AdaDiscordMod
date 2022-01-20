const axios = require('axios');
require('dotenv');
async function EntityDefinition(itemHash){


    const myAPIKey = process.env.APIKEY;
    const config = {
        method: 'GET',
        url: `https://www.bungie.net/platform/Destiny2/Manifest/DestinyInventoryItemDefinition/${itemHash}/`,
        headers: {'X-API-KEY': myAPIKey},
    }
    let res = await axios(config);
    console.log(res.data.Response.displayProperties.name);
}

module.exports = EntityDefinition;