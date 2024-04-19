module.exports = {
    name: 'yt',
    description: 'This is my youtube channel',
    // Here you type the code
    execute(client, message, args) {
        message.channel.send('https://youtube.com/c/lcscostadev');
    }
}