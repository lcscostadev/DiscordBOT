module.exports = {
    name: 'tts',
    description: 'This is a Text to Speech command',
    // Here you type the code
    execute(client, message, args) {
        // Text to speech array
        const ttsreplies = [
            'Testando voz de discord.',
            'Estou usando o TTS para falar',

        ]

        const randomtts = Math.floor(Math.random() * ttsreplies.length);
        message.channel.send(ttsreplies[randomtts], { tts: true });
    }
}