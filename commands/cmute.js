const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {


      if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous ne possédez pas les permissions suffisantes");
        if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je n'ai pas les permissions suffisante pour kick");
        
    let member = message.mentions.members.first();
    if (!member) return message.channel.send('Membre introuvable');
    if (
        member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition &&
        message.author.id !== message.guild.ownerID
    )
        return message.channel.send('Vous ne pouvez pas mute ce membre');
    if (!member.manageable) return message.channel.send('Je ne peux pas mute ce membre');
    let muterole = message.guild.roles.find(role => role.name === 'Muted');
    if (muterole) {
        member.addRole(muterole);
        message.channel.send(member + ' a été mute :white_check_mark:');
    } else {
        message.guild.createRole({ name: 'Muted', permissions: 0 }).then(function(role) {
            message.guild.channels
                .filter(channel => channel.type === 'text')
                .forEach(function(channel) {
                    channel.overwritePermissions(role, {
                        SEND_MESSAGES: false,
                    });
                });
            member.addRole(role);
            message.channel.send(member + ' a été mute :white_check_mark:');
        });
    }
      }



module.exports.help = {
    name: "mute"
}
