const axios = require('axios');
require('dotenv');
async function EntityDefinition(itemHash1, itemHash2, res){
    const myAPIKey = process.env.APIKEY;
    const config = {
        method: 'GET',
        url: `https://www.bungie.net/platform/Destiny2/Manifest/DestinyInventoryItemDefinition/${itemHash1}/`,
        headers: {'X-API-KEY': myAPIKey},
    }
    let result = await axios(config);
    let mod1 = result.data.Response.displayProperties.name;

    const config2 = {
        method: 'GET',
        url: `https://www.bungie.net/platform/Destiny2/Manifest/DestinyInventoryItemDefinition/${itemHash2}/`,
        headers: {'X-API-KEY': myAPIKey},
    }
    let result2 = await axios(config2);
    let mod2 = result2.data.Response.displayProperties.name;

    console.log(mod1);
    console.log(mod2);

    res.send(mod1 + '<br>' + mod2);
}

module.exports = EntityDefinition;