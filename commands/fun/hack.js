const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const db = require("quick.db")
module.exports = {
    name: 'hack',
    category: 'fun',
    
run: async (client, message, args) => {
    
       


       const user = await message.mentions.users.first()
        if(!user) return message.channel.send("Woaaah slow down, who are we hacking? It Should be a member not role.")
        

        message.channel.send(`Hacking @${user.username} now...`)
        .then((msg) => {
            setTimeout(function() {
            msg.edit(`[▝]Finding IP address`);
          }, 1500)
            setTimeout(function() {
            msg.edit(`[▗] **IP ADDRESS** : 127.0.0.1:2643`);
          }, 3000)
          setTimeout(function() {
            msg.edit(`[▖] Selling data to the Government...`);
          }, 4500)
          setTimeout(function() {
            msg.edit(`[▘] Reporting account to discord for breaking TOS...`);
          }, 6000)
          setTimeout(function() {
            msg.edit(`[▝] Finding Email Address...`);
          }, 7500)
          setTimeout(function() {
            msg.edit(`[▗] **Email Address** : ${user.username}@gmail.com`);
          }, 9000)
          setTimeout(function() {
            msg.edit(`[▖] Hacking Epic Games Account...`);
          },  10500)
          setTimeout(function() {
            msg.edit(`[▘] Hacking medical records...`);
          },  12000)
         setTimeout(function() {
            msg.edit(`Finished hacking @${user.username}`);
         }, 13500)
         setTimeout(function() {
            message.channel.send('The *totally* `real` and `dangerous` hack is complete')
         }, 15000)
         });

    }
   
}