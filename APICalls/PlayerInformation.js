
const axios = require('axios');
const myAPIKey = process.env.APIKEY;

async function PlayerInformation(playerID){
    let playerInfo = ""
    const config = {
        method: 'GET',
        url: 'https://www.bungie.net/platform/User/GetMembershipsById/' + playerID + '/254/',
        headers: {'X-API-Key': myAPIKey}
    }
    let res = await axios(config);
    playerInfo = res.data.Response;

    console.log(playerInfo);
}
module.exports = PlayerInformation
