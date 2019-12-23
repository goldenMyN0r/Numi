const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {


     if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous ne possédez pas les permissions suffisantes");
      if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je n'ai pas les permissions suffisante pour supprimer des messages");
     
      if(!args[0]) return message.channel.send("Merci de préciser le nombre de messages à supprimer entre 1 et 100");
     
 message.delete()
   message.channel.bulkDelete(args[0], true).then((mes) => {
        message.channel.send(`${mes.size} messages ont été supprimés !`);
      }).catch(e => {
        message.channel.send("Une erreur est survenu, veuillez réessayez ultérieurement").then(()=> {
          console.error(e);
        });
      }); 
      }



module.exports.help = {
    name: "clear"
}
