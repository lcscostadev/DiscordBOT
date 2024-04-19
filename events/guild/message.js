module.exports = (Discord, client, message) => {

    const prefix = '--';
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    // if we want to use multiple commands with spaces
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd);

    if (command) command.execute(client, message, args, Discord);
}


