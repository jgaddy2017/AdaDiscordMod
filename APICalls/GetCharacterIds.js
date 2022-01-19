
const axios = require('axios');

const myAPIKey = process.env.APIKEY;

async function GetCharacterIds(destinyMembershipID){
    let itemName = ""
    const config = {
        method: 'GET',
        url: 'https://www.bungie.net/platform/Destiny2/3/Profile/' + destinyMembershipID +'/',
        headers: {'X-API-Key': myAPIKey},
        params: {'components': 'Profiles'}
    }
    let res = await axios(config).catch(function(err){
        if(err.response){
            console.log(err.response.data);
        }
    });
    //itemName = res.data.Response.data.inventoryItem.itemName;

    console.log(res.data.Response.profile.data.characterIds);
    //console.log(res.data.Response.vendors);
}
module.exports = GetCharacterIds;