const Discord = require('discord.js')
const superagent = require("superagent")

module.exports.run = async (bot, message, args) => {  
if(message.author.id === process.env.mylanID || message.author.id === process.env.nu4hID) {
  const code = args.join(" ")
    if (code.length === 0) {
      return message.channel.send("J'aimerais avoir un script a interpreter :thinking:")
    }
    try {
      let evaled = eval(code)

      if (typeof evaled !== "string") evaled = require("util").inspect(evaled)

      const resultEmbed = new Discord.RichEmbed()
        .setDescription("```" + evaled + "```")
        .setColor(0x00ff00)

      message.channel.send(resultEmbed)
    } catch (err) {
      const embed = new Discord.RichEmbed()
        .setDescription(`\`\`\`js\n${err.stack}\`\`\``)
        .setColor(0xff0000)

      message.channel.send(embed)
    }
  } else {
    message.channel.send("Vous n'êtes pas fondateur du bot !")
  }
}
module.exports.help = {
    name: 'eval'
}