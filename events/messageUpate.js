const Discord = require('discord.js')
const snekfetch = require('snekfetch')
const moment = require('moment')
module.exports = async (bot, message, oldMessage, newMessage) => {

bot.settings.ensure(message.guild.id, bot.defaultSettings);

            var embed = new Discord.RichEmbed()
            .setAuthor(oldMessage.member.user.tag, oldMessage.member.user.avatarURL)
            .setColor("#FE6F01")
            .setTitle("Un message a été edits ! ✅ ")
            .setDescription(`Le message de ${oldMessage.author} a été modifier.`)
            .addField("Message avant l'édits:", message)
            .addField("Message après l'édits:", oldMessage)
            .addField("Dans le salon:", oldMessage.channel)
            .setTimestamp()
            
  message.guild.channels
    .find("id", bot.settings.get(message.guild.id, "modLogChannel"))
    .send(embed)
    .catch(console.error);
}