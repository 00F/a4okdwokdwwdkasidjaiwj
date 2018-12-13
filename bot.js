const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready.');
    var words = ["الله الله ربي لا اشرك بربي شيئاً","لا اله الا الله محمد رسول الله","اللهم صل على سيدنا محمد وعلى آله وصحبه وسلم تسليماً كثيرا"];
    setInterval(() => {
        client.channels.find(c => c.id == '485710163966296064').send(words[Math.floor(Math.random() * words.length)]);
    }, 3000000);
    message.delete(200000);
});

client.login(process.env.BT);
