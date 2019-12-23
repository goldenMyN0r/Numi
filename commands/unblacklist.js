const Discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  if(message.author.id === process.env.mylanID || message.author.id === process.env.nu4hID) {
     let user = message.mentions.users.first()
      if(!user) {
      return message.reply('Vous n\'avez pas mentionné de personne !')
      }
      if(!bot.blacklist.has(user.id)) {
          return message.reply("Cet utilisateur n'est pas blacklist !");
      } 
      
        bot.blacklist.delete(user.id, bot.blreason);
        const embed = new Discord.RichEmbed()
         .setColor("#0900F6")
            .setTitle("Blacklist")
            .setDescription(':warning: je vien de unblacklit un utilisateur :warning:')
            .addField("ID :", `${user.id}`)  
            .addField("Pseudo :", `${user.username}`)
    bot.channels.get("637299774516887552").send(embed)
      } else {
        message.reply("Tu n'as pas le droit!")
      }
}

module.exports.help = {
name: "unbl"
}