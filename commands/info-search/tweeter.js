
const Discord = require("discord.js")
const request = require("node-superfetch") //npm i node-superfetch
const {stripIndents} = require("common-tags") //npm i common-tags
const twitter = require("twitter-api.js") //npm i twitter-api.js
module.exports = {
  name: "twitter",
  aliases: ["twe"],
  category: "search",
  premiumOnly: "true",
  run: async (client, msg, args) => {
    let user = args[0]
    if(!user) return msg.channel.send("Provide your twitter name")
    
    try {
      const body = await twitter.users(user)
      const tweet = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setAuthor(`@${body.screen_name.toLowerCase()}`, body.verified ? "https://emoji.gg/assets/emoji/6817_Discord_Verified.png" : null)
      .setDescription(stripIndents` ${body.description}
      \`•\` Followers: **${(body.followers_count).toLocaleString()}**
      \`•\` Following: **${(body.friends_count).toLocaleString()}**
      \`•\` Tweets: **${(body.statuses_count).toLocaleString()}**
      \`•\` Account Created At: ${body.created_at}`)
      .setFooter(`Twitter ID: ${body.id}`, "https://abs.twimg.com/favicons/twitter.ico")
      .setThumbnail(body.profile_image_url_https.replace('_normal', ''))
      .setImage(body.profile_banner_url)
      msg.channel.send(tweet)
    } catch (e) {
      if(e.status === 403) return msg.channel.send("This user private mode, or deleted account")
      else if(e.status === 404) return msg.channel.send("Not Found")
      else return msg.channel.send(`Unknown error: \`${e.message}\``)
    }
  }
}