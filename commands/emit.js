const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

client.emit(args[0], args.join(" ").slice(args[0]))
}

module.exports.help = {
    name: "emit"
}
