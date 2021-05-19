const Discord = require("discord.js");

const malScraper = require('mal-scraper');


module.exports = {
  name: "anime",
  category: "search",
  description: "Get info about an anime",
  usage: "[command | Anime]",
  run: async (client, message, args) => {
    //command
    const search = `${args}`;
    if (!search)
      return message.reply('Please add a search query!');

    malScraper.getInfoFromName(search)
      .then((data) => {
        const malEmbed = new Discord.MessageEmbed()
          .setAuthor(`My Anime List search result for ${args}`.split(',').join(' '))
          .setThumbnail(data.picture)
          .setColor('RANDOM') //What ever u want color!
          .addField('Premiered', `\`${data.premiered}\``, true)
          .addField('Broadcast', `\`${data.broadcast}\``, true)
          .addField('Genres', `\`${data.genres}\``, true)
          .addField('English Title', `\`${data.englishTitle}\``, true)
          .addField('Japanese Title', `\`${data.japaneseTitle}\``, true)
          .addField('Type', `\`${data.type}\``, true)
          .addField('Episodes', `\`${data.episodes}\``, true)
          .addField('Rating', `\`${data.rating}\``, true)
          .addField('Aired', `\`${data.aired}\``, true)
          .addField('Score', `\`${data.score}\``, true)
          .addField('Favorite', `\`${data.favorites}\``, true)
          .addField('Ranked', `\`${data.ranked}\``, true)
          .addField('Duration', `\`${data.duration}\``, true)
          .addField('Studios', `\`${data.studios}\``, true)
          .addField('Popularity', `\`${data.popularity}\``, true)
          .addField('Members', `\`${data.members}\``, true)
          .addField('Score Stats', `\`${data.scoreStats}\``, true)
          .addField('Source', `\`${data.source}\``, true)
          .addField('Synonyms', `\`${data.synonyms}\``, true)
          .addField('Status', `\`${data.status}\``, true)
          .addField('Identifier', `\`${data.id}\``, true)
          .addField('Link', data.url, true)
          .setTimestamp()
          .setFooter(`Requested ${message.member.displayName}`,  message.author.displayAvatarURL({ dynamic: true }))

        message.channel.send(malEmbed);

      })
  }
};

//Made By Alison_