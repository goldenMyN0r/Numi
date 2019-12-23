const Discord = require('discord.js')
const snekfetch = require('snekfetch')
const moment = require('moment')
module.exports = async (bot, member) => {
  
  bot.settings.ensure(member.guild.id, bot.defaultSettings);
  
  let leaveMessage = bot.settings.get(member.guild.id, "leaveMessage");
  if(!leaveMessage) return;
  leaveMessage = leaveMessage.replace("{{user}}", member.user)
  leaveMessage = leaveMessage.replace("{{username}}", member.user.tag)
  leaveMessage = leaveMessage.replace("{{guild}}", member.guild.name)
  
  member.guild.channels
    .find("name", bot.settings.get(member.guild.id, "leaveChan"))
    .send(leaveMessage)
    .catch(console.error);
  
}