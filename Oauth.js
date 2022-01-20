const axios = require('axios');
const open = require('open');

async function OauthFunc(){
    //await open('https://www.bungie.net/en/OAuth/Authorize?client_id=39030&response_type=code');
    /*let config = {
        method: 'GET',
        url: 'https://www.bungie.net/en/OAuth/Authorize?client_id=39030&response_type=code',
        params: {'code': ''}
    }
    let res = await axios(config);
    console.log(res);*/
    /*
    let config = {
        method: 'POST',
        url: 'https://www.bungie.net/en/oauth/authorize?client_id=39030&response_type=code'
    }
    let res = await axios(config);
    console.log(res);
    */
   let config = {
       method: 'POST',
       url: 'https://www.bungie.net/Platform/App/OAuth/Token/',
       header: {'Content-Type': 'application/x-www-form-urlencoded'},
       body: {'client_id':'39030', 'grant_type':'authorization_code', 'code':'93e5f51166c7c6784cb2c390ff072474'}
   }
   let res = await axios(config);
   //console.log(res);
}

module.exports = OauthFunc;