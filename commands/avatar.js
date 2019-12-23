const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

let user;
     if (message.mentions.users.first()) {
       user = message.mentions.users.first();
     } else if (message.guild.members.get(args[0])) {
       user = message.guild.members.get(args[0]);
     } else {
       user = message.author
     }
    message.channel.send(user.displayAvatarURL)

}

module.exports.help = {
    name: "avatar"
}
