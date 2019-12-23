const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

 var embed = new Discord.RichEmbed()
        .setTitle("Commande d'aidet")
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField("Modération", "ban | kick | unban | clear | warn")
        .addField("Fun", "avatar | ping")
        //.addField("Informations", "help | guildinfo | channelinfo | botinfo | userinfo")
        .setFooter(client.user.username, client.user.avatarURL)
 message.channel.send(embed)

}

module.exports.help = {
    name: "help"
}
