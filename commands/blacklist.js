const Discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  if(message.author.id === process.env.mylanID || message.author.id === process.env.nu4hID) {
    let user = message.mentions.users.first()
      if(!user) {
      return message.reply('Vous n\'avez pas mentionné de personne !')
      }
      if(bot.blacklist.has(user.id)) {
          return message.reply("Cet utilisateur est déjà blacklist !");
      }
      let reason = args.join(" ").slice(22)
      bot.blreason = reason
      if(!reason) return message.reply('Veuillez preciser une raison !')
      bot.blacklist.set(user.id, bot.blreason);
      
    const embed = new Discord.RichEmbed()
         .setColor("#0900F6")
            .setTitle("Blacklist")
            .setDescription(':warning: je vien de blacklist un utilisateur :warning:')
            .addField("ID :", `${user.id}`)  
            .addField("Pseudo :", `${user}`)
            .addField("Raison :", `${reason}`)
    bot.channels.get("637299774516887552").send(embed)
      } else {
        message.reply("Tu n'as pas le droit!")
      }
}

module.exports.help = {
name: "blacklist"
}