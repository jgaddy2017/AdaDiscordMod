const axios = require('axios');
require('dotenv');
const GetCharacterIds = require('./GetCharacterIds');
const myAPIKey = process.env.APIKEY;

async function GetCurrentUser(AuthorizationCode, AdaID, res){
    const config = {
        method: 'GET',
        url: 'https://www.bungie.net/Platform/User/GetMembershipsForCurrentUser/',
        headers: {'X-API-Key': myAPIKey, 'Authorization': AuthorizationCode}
    }
    let result = await axios(config).then(response => {
        let MembershipID = response.data.Response.primaryMembershipId;
        GetCharacterIds(MembershipID, AdaID, AuthorizationCode, res);
    }).catch(error => {
        console.log("ERROR: " + error)
    });
}
module.exports = GetCurrentUser
