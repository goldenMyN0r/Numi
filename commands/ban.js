const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {


        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous ne possédez pas les permissions suffisantes");
        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send("Je n'ai pas les permissions suffisante pour ban");
        
        var user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!user) return message.channel.send("Veuillez mentionner ou indiquer l'id de la personne à bannir");
        
        var raison = args[1];
        if(!raison) return message.channel.send("La raison n'a pas été émise");
        
        message.guild.ban(user, {reason: raison}).then(m => {
          m.channel.send(`L'utilisateur ${user.username} a été banni pour raison: ${raison}`);
        }).catch(e => {
          message.channel.send("Une erreur est survenu, veuillez réessayez ultérieurement").then(()=> {
            console.error(e);
          });
        });
      }



module.exports.help = {
    name: "ban",
  
}
