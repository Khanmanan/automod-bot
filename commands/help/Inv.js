
const discord = require('discord.js'); //Define the discord.js module
const client = new discord.Client(); //Creating discord.js client (constructor)
require('discord-buttons')(client);
module.exports = {
  name: "inv",
  description: "a cool invite bot Commnd ",
  category: "info",
 // users will need premium to execute this
  run: async (bot, message, args) => {

        
     message.buttons('Invite me', {
            buttons: [
                {
                    style: 'green',
                    label: 'Click to function!',
                    id: 'click_to_function'
                },
                {
                    style: 'url',
                    label: 'Vote for me!',
                    url:'https://dsc.gg/automodbot'
                }
            ]
        })
  }}