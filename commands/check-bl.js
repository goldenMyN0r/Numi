module.exports.run = async(bot, message, args) => {
        let user = message.mentions.users.first()
        if(!user) {
        return message.reply('Vous n\'avez pas mentionné de personne !')
        }
        if(bot.blacklist.has(user.id, bot.blreason)) {
            return message.reply("Cet utilisateur est blacklist pour la raison: " + bot.blacklist.get(user.id, bot.blreason));
        } else {
            message.reply(`Cet utilisateur n'est pas dans la blacklist`)
        }
  }
  
  module.exports.help = {
    name: 'checkbl'
  }