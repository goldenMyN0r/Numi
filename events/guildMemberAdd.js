const Discord = require('discord.js')
const moment = require('moment')
module.exports = async (bot, member) => {

  if(bot.settings.get(member.guild.id, "autoBanBlacklisted") == true) {
    if(bot.blacklist.has(member.id, bot.blreason)) { 
      let reason = `Blacklist Numi n.setconf autoBanBlacklisted false pour désactiver les auto ban de la blacklist. raison: ${bot.blacklist.get(member.id, bot.blreason)}`
      member.ban(reason)
  }
}

bot.settings.ensure(member.guild.id, bot.defaultSettings);
  
  
  let welcomeMessage = bot.settings.get(member.guild.id, "welcomeMessage");
  if(!welcomeMessage) return;
  welcomeMessage = welcomeMessage.replace("{{username}}", member.user.tag)
  welcomeMessage = welcomeMessage.replace("{{user}}", member.user)
  welcomeMessage = welcomeMessage.replace("{{guild}}", member.guild.name)

  member.guild.channels
    .find("name", bot.settings.get(member.guild.id, "welcomeChannel"))
    .send(welcomeMessage)
    .catch(console.error);
  
}