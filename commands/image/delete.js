const Discord = require('discord.js')

module.exports = {
  name: "delete",
  category: "Image",
  description: "delete this.",
  usage: "jail <user>",
  run: async (client, message, args) => {
    
   const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setImage(encodeURI
    (`$https://kaskus.cf/api/v1/imagegen/delete?avatar=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};
