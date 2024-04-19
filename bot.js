// Basic setup
require('dotenv').config();
const fetch = require('node-fetch');
const Discord = require('discord.js');
const client = new Discord.Client();
// Load the values of the env file
client.login(process.env.TOKEN);

// Event and Command Handler
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

// Tenor API for gifs
client.on('message', gifsMessage);
async function gifsMessage(msg) {
    let tokens = msg.content.split(" ");
    if (tokens[0] === '--gif') {
        // --gif kitty cat
        let keywords = "coding train";
        if (tokens.length > 1) {
            keywords = tokens.slice(1, tokens.length).join(" ");
        }
        let url = `https://tenor.googleapis.com/v2/search?q=${keywords}&key=${process.env.TENORKEY}&client_key=my_test_app&limit=8`
        let response = await fetch(url);
        let json = await response.json();
        let randGif = Math.floor(Math.random() * json.results.length);
        msg.channel.send(json.results[randGif].url);
    }
}

const repliesLucas = [
    'Fala galera eu sou o lucas', 'Lukitas 😎'
]


// Random typed messages
client.on('message', gotMessage);
function gotMessage(msg) {
    const reader = msg.content;
    if (reader === 'bom dia' || reader === 'bd' || reader === 'bo dia' || reader === 'b dia' || reader === 'dia') {
        msg.channel.send("Buenos dias 🤠👍");
    } else if (reader === 'eae' || reader === 'fala ai' || reader === 'ola' || reader === 'olá') {
        msg.channel.send("Olá 🥳🤠");
    } else if (reader === 'lucas' || reader === 'Lucas' || reader === 'LUCAS' || reader === 'lucas') {
        const randomLucas = Math.floor(Math.random() * repliesLucas.length);
        msg.channel.send(repliesLucas[randomLucas]);
    } else if (reader === 'boa noite' || reader === 'bn' || reader === 'bao noite' | reader === 'noite') {
        msg.channel.send("boa sonequinha 🥱😴");
    }
}

