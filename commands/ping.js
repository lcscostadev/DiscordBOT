module.exports = {
    name: 'ping',
    description: 'This is a ping command',
    // Here you type the code
    execute(client, message, args) {
        message.channel.send('pong!');
    }
}