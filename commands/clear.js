require('dotenv').config();

module.exports = {
    name: 'clear',
    description: 'Clear messages',
    // Here you type the code
    async execute(client, message, args) {
        if (message.member.roles.cache.has('process.env.ADMIN_ROLE_ID')) {

            if (!args[0]) return message.reply('Insira a quantidade de mensagens que você quer deletar')
            if (isNaN(args[0])) return message.reply("Por favor insira um número");

            if (args[0] > 100) return message.reply("Você não pode deletar mais de 100 mensagens");
            if (args[0] < 1) return message.reply('Você precisa deletar pelo menos 1 mensagem');

            // waiting to fetch all this messages that we specify, then here we delete those messages
            await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                message.channel.bulkDelete(messages);
            })
        } else {
            message.channel.send('Somente admins podem usar este comando!');
        }
    }
}