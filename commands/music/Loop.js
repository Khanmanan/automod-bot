const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'loop', // Optional
    aliases: [], // Optional
    category: 'Music',
    description: 'Loop the queue', 
    run: async (client, message, args) => {
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('#FF5757')
            .setDescription(`You need to be in a vc to execute this command!`)
            if (!voice_channel) return message.channel.send(embed);
            // Enable repeat mode
            let status = client.player.setQueueRepeatMode(message, true);
            const loop = new MessageEmbed()
            .setColor('#85b0d2')
            .setDescription(`Queue will be repeated indefinitely!`)
            if(status === null)
            return;
            message.channel.send(loop);
    }
}