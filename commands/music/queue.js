
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'queue', // Optional
    aliases: ['q'], // Optional
    category: 'Music',
    description: 'Gives you info about the server queue', 
    run: async (client, message, args) => {
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor('#FF5757')
            .setDescription(`You need to be in a vc to execute this command!`)
            if (!voice_channel) return message.channel.send(embed);
            let queue = client.player.getQueue(message);
            if(queue)
            message.channel.send('Queue:\n'+(queue.songs.map((song, i) => {
                return `${i === 0 ? 'Now Playing' : `#${i+1}`} - ${song.name} | ${song.author}`
            }).join('\n')));
    }
}