
const axios = require('axios');
const myAPIKey = process.env.APIKEY;

async function GetAdasDailyMods(adaId){
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

/*
async function GetAdasDailyMods(MembershipID, CharacterID, AdaId){
    let itemName = ""
    const config = {
        method: 'GET',
        url: `https://www.bungie.net/platform/Destiny2/3/Profile/${MembershipID}/Character/${CharacterID}/Vendors/${AdaId}/`,
        headers: {'X-API-Key': myAPIKey},
        params: {'components': 'Vendors,VendorSales', 'filter': AdaId}
    }
    let res = await axios(config).catch(function(err){
        if(err.response){
            console.log(err.response.data);
        }
    });
    console.log(res);
    
}
*/
module.exports = GetAdasDailyMods;