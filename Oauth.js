const axios = require('axios');
const open = require('open');
<<<<<<< HEAD
const qs = require('qs');

async function OauthFunc(){
    //await open('https://www.bungie.net/en/OAuth/Authorize?client_id=39046&response_type=code');
    let code = '07e0f586f25b1f5102f823d7cfeb3808';
    let authorization_code = '';
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
      
      await axios(config)
      .then(function (response) {
        authorization_code = response.data.access_token;
      })
      .catch(function (error) {
        open('https://www.bungie.net/en/OAuth/Authorize?client_id=39046&response_type=code');
        //console.log(error);
      });
      
      

       return authorization_code;
     
      
=======

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
>>>>>>> main

      
}
module.exports = OauthFunc;