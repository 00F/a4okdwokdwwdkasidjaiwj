const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready.');
    var words = ["word","word"];
    setInterval(() => {
        client.channels.find(c => c.id == '485710163966296064').send(words[Math.floor(Math.random() * words.length)]);
    }, 200000);
});

client.login(process.env.BT);
