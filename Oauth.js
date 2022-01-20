const axios = require('axios');
const open = require('open');
const qs = require('qs');
require('dotenv');

const getAdasDailyMods = require('./APICalls/GetAdasDailyMods');

async function OauthFunc(MembershipID, CharacterID, AdaID, Code){
    const ClientID = process.env.CLIENT_ID;
    let data = qs.stringify({
        'client_id': ClientID,
        'grant_type': 'authorization_code',
        'code': Code 
      });
      let config = {
        method: 'post',
        url: 'https://www.bungie.net/Platform/App/OAuth/Token/',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
      };
      await axios(config).then(response => {
        authorizationCode = 'Bearer ' + response.data.access_token;
        getAdasDailyMods(MembershipID, CharacterID, AdaID, authorizationCode);
        })
        .catch(function (error) {
          console.log(error);
          open('https://www.bungie.net/en/OAuth/Authorize?client_id=39046&response_type=code');
          //console.log(error);
        });
      
      
}
module.exports = OauthFunc;