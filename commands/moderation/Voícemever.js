const { ownerID } = require("../../owner.json")


module.exports = {
  
        name:"voicemove",
        aliases: ["vcmove"],
        category: "moderation",
        accessableby: ""
    ,
 
run: async(bot, message, args) => {
         if (!message.member.hasPermission("MOVE_MEMBERS") && !ownerID .includes(message.author.id)) return message.channel.send("**You Dont Have The Permissions To Ban Users! - [MOVE_MEMBERS]**");
        
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase());

        if(!member) return message.channel.send("Unable to find the mentioned user in this guild.")

        let channel = message.mentions.channels.first() || bot.guilds.cache.get(message.guild.id).channels.cache.get(args[1]) || message.guild.channels.cache.find(c => c.name.toLowerCase() === args.slice(1).join(' ').toLocaleLowerCase());
        if (!channel.type === "voice") return message.channel.send("Unable to locate the voice channel. Make sure to mention a voice channel not a text channel!") 

        try {
            member.voice.setChannel(channel);
            message.channel.send("Success ✅ : Member Moved!")
        } 
        
        catch(error) {
            console.log(error);
            message.channel.send("Oops! An unknown error occured. Please try again later.")
        }

    }
}