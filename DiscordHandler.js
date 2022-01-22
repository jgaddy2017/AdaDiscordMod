require("dotenv").config();

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('message', (message) => {
    if(message.author.bot) return;
    if(message.content === '!adaMods'){
        message.reply('test test');
    }
});



client.login(process.env.DISCORDJS_TOKEN);