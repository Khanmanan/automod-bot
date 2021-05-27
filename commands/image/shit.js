const Discord = require('discord.js')

module.exports = {
  name: "affect",
  category: "Image",
  description: "get affected, REALLY AFFECTED",
  usage: "jail <user>",
  run: async (client, message, args) => {
    
   const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setImage(encodeURI
    (`https://kaskus.cf/api/v1/imagegen/affect?avatar=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};
