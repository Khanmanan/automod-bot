const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'disable-loop', // Optional
    aliases: [], // Optional
    category: 'Music',
    description: 'Stop looping the queue', 
    run: async (client, message, args) => {
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('#FF5757')
            .setDescription(`You need to be in a vc to execute this command!`)
            if (!voice_channel) return message.channel.send(embed);
            // Disable repeat mode
            let status = client.player.setQueueRepeatMode(message, false);

            const disloop = new MessageEmbed()
            .setColor('#85b0d2')
            .setDescription(`Queue will not be longer repeated indefinitely!`)
            if(status === null)
            return;
            message.channel.send(disloop);
    }
}