const superagent = require('superagent');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'joke', // Optional
    aliases: [], // Optional
    category: 'fun',
    description: 'Display a random joke', 
        run: async (client, message, args) => {
            await superagent
        .get('http://icanhazdadjoke.com/')
        .set('Accept', 'application/json')
		   .end((err, response) => {
        let jEmbed = new MessageEmbed()
        .setTitle("Joke")
        .setDescription(response.body.joke)
        .setColor("#85b0d2");
        message.channel.send(jEmbed);
		})
    }
}