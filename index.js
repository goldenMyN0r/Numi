/*recuperation des modules*/
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const Enmap = require('enmap')

/*Base de donnes*/
client.settings = new Enmap({
  name: "settings",
  fetchAll: false,
  autoFetch: true,
  cloneLevel: 'deep'
});

client.blacklist = new Enmap({
  name: 'blacklist',
  fetchAll: false,
  autoFetch: true,
  cloneLevel: 'deep'
})

client.defaultSettings = {
  prefix: "n.",
  modLogChannel: "undefined",
  welcomeChannel: "undefined",
  welcomeMessage: "undefined",
  leaveChan: "undefined",
  leaveMessage: "undefined",
  ticketParent: "undefined",
  autoBanBlacklisted: true
}

fs.readdir('./events', (err, files) => {
  if(err) return console.log(err)
  files.forEach(file => {
    const event = require(`./events/${file}`)
    const eventName = file.split('.')[0]
    client.on(eventName, event.bind(null, client))
  })
})

client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Commande introuvable.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`)
        console.log(`${f} est OK!`);
        client.commands.set(props.help.name, props);
     
    
    });

});






client.login(process.env.TOKEN);