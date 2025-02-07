const { Client } = require('messenger-api');
require('dotenv').config();

const bot = new Client({
    email: process.env.FB_EMAIL,
    password: process.env.FB_PASSWORD
});

bot.on('message', (message) => {
    if (message.body === '/help') {
        bot.sendMessage(message.threadID, 'Yes');
    }
});

bot.login()
    .then(() => console.log('Bot is online!'))
    .catch(err => console.error('Login failed:', err));
