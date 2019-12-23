module.exports.run = async(bot, message, args) => {
  if(!message.member.hasPermission('MANAGE_GUILD')) return message.reply('Vous n\'avez pas la permission Gerer le serveur "MANAGE_GUILD" !')
     let configProps = Object.keys(bot.guildConf).map(prop => {
      return `${prop}  :  ${bot.guildConf[prop]}\n`;
    });
    message.channel.send(`Voici la configuration actuelle du bot sur se serveur:
    \`\`\`${configProps}\`\`\``);
}

module.exports.help = {
  name: "check-conf"
}