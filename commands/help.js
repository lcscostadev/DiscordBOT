
module.exports = {
    name: 'help',
    description: 'This is a help command list',
    // Here you type the code
    execute(client, message, args) {
        const allCommands = [
            'Here are all the commands of this bot:',
            '```--ping, --yt, --tts, --site```'
        ];
        message.channel.send(allCommands);
    }
}