const axios = require('axios');
const open = require('open');
const qs = require('qs');

const getAdasDailyMods = require('./APICalls/GetAdasDailyMods');

async function OauthFunc(){
    //await open('https://www.bungie.net/en/OAuth/Authorize?client_id=39046&response_type=code');
    let code = '7436485ce624ad7a3a620acc12767ee9';
    let data = qs.stringify({
        'client_id': '39046',
        'grant_type': 'authorization_code',
        'code': code 
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
        let destinyMembershipID = '4611686018487538722';
        let myCharacterId = '2305843009446664091';
        let adaId = '350061650'
        getAdasDailyMods(destinyMembershipID, myCharacterId, adaId, authorizationCode);
        })
        .catch(function (error) {
          console.log(error);
          open('https://www.bungie.net/en/OAuth/Authorize?client_id=39046&response_type=code');
          //console.log(error);
        });
      
      
}
module.exports = OauthFunc;