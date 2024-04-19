module.exports = {
    name: 'site',
    description: 'This is the discord bot website',
    // Here you type the code
    execute(client, message, args) {
        message.channel.send('https://lcscostadev.github.io/GVBot/');
    }
}