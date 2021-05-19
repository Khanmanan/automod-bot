const client = require('nekos.life');
const {Discord,richEmbed} = require('discord.js')
const neko = new client();


module.exports = {
    name: "fact",
    category: "fun",
  description: "sends a cool fact",
  usage: "[command]",
  run: async (client, message, args) => {
  //command

    async function work() {

        let owo = (await neko.sfw.fact());

        message.channel.send(owo.fact).catch(error => {
            console.error(error);
        });
message.delete();
      }

      work();
  }
  };