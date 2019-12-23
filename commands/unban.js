const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {


            if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous ne possédez pas les permissions suffisantes");
      if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send("Je n'ai pas la permissions pour unban");
     
      var user = message.guild.members.get(args[0]); 
      if(!user) return message.channel.send("Veuillez mentionner ou indiquer l'id de la personne à unbannir");

     message.guild.unban(user).then((m) => {
       m.channel.send(`L'utilisateur ${user} a été unbanni`)
     }).catch(e => {
      message.channel.send("Une erreur est survenu, veuillez réessayez ultérieurement").then(()=> {
        console.error(e);
      });
    });
      }



module.exports.help = {
    name: "unban"
}
