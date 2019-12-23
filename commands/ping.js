const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

const msg = await message.channel.send("Pinging...");
    
var ping = msg.createdTimestamp - message.createdTimestamp;

await msg.edit(Math.round(ping) + "ms")

}

module.exports.help = {
    name: "ping"
  
}
