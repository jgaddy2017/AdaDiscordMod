
const axios = require('axios');
const myAPIKey = process.env.APIKEY;

async function GetInventoryItemName(itemID){
    let itemName = ""
    const config = {
        method: 'GET',
        url: 'https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/'+itemID,
        headers: {'X-API-Key': myAPIKey}
    }
    let res = await axios(config);
    itemName = res.data.Response.data.inventoryItem.itemName;
    //itemName = res;
    console.log(itemName);
}
module.exports = GetInventoryItemName
