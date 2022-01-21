
const axios = require('axios');
const EntityDefinition = require('./EntityDefinition');
const myAPIKey = process.env.APIKEY;

async function GetAdasDailyMods(MembershipID, CharacterID, AdaId, AuthorizationCode, res){
    let itemName = ""
    const config = {
        method: 'GET',
        url: `https://www.bungie.net/platform/Destiny2/3/Profile/${MembershipID}/Character/${CharacterID}/Vendors/${AdaId}/`,
        headers: {'X-API-Key': myAPIKey, 'Authorization': AuthorizationCode},
        params: {'components': 'VendorSales'}
    }
    let result = await axios(config)
    let data = result.data.Response.sales.data;
    let mod1 = data[Object.keys(data)[5]].itemHash;
    let mod2 = data[Object.keys(data)[6]].itemHash;

    EntityDefinition(mod1, mod2, res);
    
}

module.exports = GetAdasDailyMods;