
const axios = require('axios');
const myAPIKey = process.env.APIKEY;

async function GetPlayerMods(destinyMembershipID){
    let itemName = ""
    const config = {
        method: 'GET',
        url: 'https://www.bungie.net/platform/Destiny2/3/Profile/' + destinyMembershipID +'/',
        headers: {'X-API-Key': myAPIKey},
        params: {'components': 'Collectibles'}
    }
    let res = await axios(config).catch(function(err){
        if(err.response){
            console.log(err.response.data);
        }
    });
    //itemName = res.data.Response.data.inventoryItem.itemName;

    //console.log(Object.keys(res.data.Response.profileCollectibles.data.collectibles[3658498].state));
    //console.log(res.data.Response.profileCollectibles.data.collectibles[3658498].state);
    console.log(res.data.Response.profileCollectibles.data);
}
module.exports = GetPlayerMods;