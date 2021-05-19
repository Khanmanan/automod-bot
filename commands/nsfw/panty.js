const discord = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
  name: "panties",
  aliases: ["panty"],
  category: "nsfw",
  description: "Get some wallpapers",
  run: async (client, message, args) => {
    
    if(!message.channel.nsfw) {
      return message.reply("This channel dosen't support nsfw content")
      
    } else {
    
    let akanekoSan = new discord.MessageEmbed()
    akanekoSan.setColor("RANDOM")
    akanekoSan.setImage(akaneko.nsfw.panties());
    return message.channel.send(akanekoSan);
      
    }
  }
}