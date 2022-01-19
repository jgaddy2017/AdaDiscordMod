
const axios = require('axios');
const myAPIKey = process.env.APIKEY;

async function VendorInformation(){
    let itemName = ""
    const config = {
        method: 'GET',
        url: 'https://www.bungie.net/platform/Destiny2/Vendors/',
        headers: {'X-API-Key': myAPIKey},
        params: {'components': 'vendors'}
    }
    let res = await axios(config);
    //itemName = res.data.Response.data.inventoryItem.itemName;

    console.log(res.data.Response.vendorGroups.data.groups);
    //console.log(res.data.Response.vendors);
    //console.log(res.data.Response.vendorGroups);
}
module.exports = VendorInformation