const Levels = require("discord-xp");
const Discord = require ("discord.js")
const Canvas = require('canvas');

    const canvas = Canvas.createCanvas(867, 892);
    const ctx = canvas.getContext('2d');
    module.exports = {
  name: "lb",
  description: "get chat Level", category: "level[beta]",
   // users will need premium to execute this
  run: async (bot, message, args) => {

       
    const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 10);
    const leaderboard = await Levels.computeLeaderboard(bot, rawLeaderboard);     
    if (rawLeaderboard.length < 1) return message.channel.send("Nobody's in leaderboard yet.");

    const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`);

    const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/823585354569351208/843202808287199232/image1.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
	ctx.font = 'normal normal bold 30px Arial';
	ctx.fillStyle = '#ffffff';
    ctx.fillText(`${lb.join("\n\n")}`, canvas.width / 3.0, canvas.height / 5.0);
	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), `abotlb.jpg`);
    message.channel.send(attachment);
  } }