module.exports.run = (bot, message, args) => {
  
    if(!message.member.hasPermission('MANAGE_GUILD')) {
      return message.reply("Vous n'avez pas la permission \"MANAGE_GUILD\".");
    }
    const [prop, ...value] = args;
    // Example: 
    // prop: "prefix"
    // value: ["+"]
    // (yes it's an array, we join it further down!)
    
    if(!bot.settings.has(message.guild.id, prop)) {
      return message.reply("Cette clé n'est pas dans la configuration !");
  }
   
  if(!prop) return message.reply('veuillez entrer une clé'); if(prop) {
  bot.settings.set(message.guild.id, value.join(" "), prop);
    
    // We can confirm everything's done to the client.
    message.channel.send(`La configuration ${prop} du serveur a été changé en:\n\`${value.join(" ")}\``);
 }}
  
module.exports.help = {
  name: "setconf"
} 