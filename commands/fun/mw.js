const discord = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
  name: "mwallpapers",
  aliases: ["mw", "mobilewallpapers", "mwall"],
  category: "nsfw",
  description: "Get some wallpapers",
  run: async (client, message, args) => {
    
    let akanekoSan = new discord.MessageEmbed()
    akanekoSan.setColor("RANDOM")
    akanekoSan.setImage(akaneko.mobileWallpapers());
    return message.channel.send(akanekoSan);
  }
}