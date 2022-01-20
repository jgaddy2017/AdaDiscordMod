
const axios = require('axios');
const EntityDefinition = require('./EntityDefinition');
const myAPIKey = process.env.APIKEY;

/*async function GetAdasDailyMods(adaId){
    let itemName = ""
    const config = {
        method: 'GET',
        url: 'https://www.bungie.net/platform/Destiny2/Vendors/' + adaId,
        headers: {'X-API-Key': myAPIKey},
        params: {'components': 'Vendors'}
    }
    let res = await axios(config).catch(function(err){
        if(err.response){
            console.log(err.response.data);
        }
    });
    //itemName = res.data.Response.data.inventoryItem.itemName;

    console.log(res.data.Response)
    //console.log(res.data.Response.sales.data['2190858386']);
    //console.log(res.data.Response.stringVariables);
    //console.log(res.data.Response.vendors);
}
*/

async function GetAdasDailyMods(MembershipID, CharacterID, AdaId, AuthorizationCode){
    let itemName = ""
    const config = {
        method: 'GET',
        url: `https://www.bungie.net/platform/Destiny2/3/Profile/${MembershipID}/Character/${CharacterID}/Vendors/${AdaId}/`,
        headers: {'X-API-Key': myAPIKey, 'Authorization': AuthorizationCode},
        params: {'components': 'VendorSales'}
    }
    let res = await axios(config)
    let data = res.data.Response.sales.data;
    let mod1 = data[Object.keys(data)[5]].itemHash;
    let mod2 = data[Object.keys(data)[6]].itemHash;

    EntityDefinition(mod1);
    EntityDefinition(mod2);
    
}

module.exports = GetAdasDailyMods;