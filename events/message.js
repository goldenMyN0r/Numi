const Discord = require('discord.js')
const moment = require('moment')

const config = require('../botconfig.json')
module.exports = (bot, message) => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
bot.guildConf = bot.settings.ensure(message.guild.id, bot.defaultSettings)
  
    if(message.content.startsWith(bot.guildConf.prefix)) {
    let commandfile = bot.commands.get(cmd.slice(bot.guildConf.prefix.length) || cmd.slice(config.prefix));
      if(!commandfile) return
      if(commandfile) commandfile.run(bot, message, args);
    }
   if(message.author.bot) return;
  if(message.guild.id == "583401360033054767" && message.channel.id == "621726757875220480") {
    message.delete()

        let suggest = message.content.trim()
        
        let authormess = message.author
        
    var embed = new Discord.RichEmbed()
      .setTitle("Suggestion de " + authormess.tag)
      .setDescription(`${suggest}`)
      .setFooter('test')
    
  message.channel.send(embed).then(async(msg) => {
   await msg.react("✔")
   await msg.react("😐")
   await msg.react("❌")
  })
}

}