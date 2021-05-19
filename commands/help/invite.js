const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",
  description: "INVITE Automodv12 beta BOT",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`HERE INVITE LINK OF BOT`)
    .setDescription(`<:CPTNLINK:830835407343714325>  [CLICK HERE](https://discord.com/api/oauth2/authorize?client_id=744597377406599188&permissions=8&scope=bot) OR [support server ](https://dsc.gg/cwkhan)`)
    .setColor("RANDOM")
    .setFooter(`made by cw khan `)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}