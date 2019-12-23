module.exports = async(bot, message, client) => {
 


 console.log(`connecté en tant que bot user sur le bot account ${bot.user.tag}!`);
 console.log('Je suis prêt !');
    setInterval(changing_status, 5000);
  
       function changing_status() {
      let status = [
`${bot.guilds.size} serveurs | n.help`
]
      let random = status[Math.floor(Math.random() * status.length)]
      bot.user.setPresence({
        game: {
          name: random,
          type: 'STREAMING',
          url: 'https://twitch.tv/numi',
          status: "idle"
        }
        })
}
}