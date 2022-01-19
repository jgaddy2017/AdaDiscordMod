const axios = require('axios');

async function OauthFunc(){
    let config = {
        method: 'GET',
        url: 'https://www.bungie.net/en/OAuth/Authorize?client_id=39030&response_type=code',
        params: {'code': ''}
    }
    let res = await axios(config);
    console.log(res);
}

module.exports = OauthFunc;