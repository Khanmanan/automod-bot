const request = require("node-superfetch");

module.exports = {
  name: "tts",
        aliases: [''],
        category: "moderation",
        description: "Sets Custom Prefix",
        usage: "[prefix] tts",
        run: async (bot, message, args, ops) => {
    if (!args[0])
      return message.channel.send(
        "**Please Enter Something To Convert To Speech!**"
      );
    let text = args.join(" ");
    
    if (text.length > 1024)
      return message.channel.send(
        "**Please Enter Text Between 0 And 1024 Characters!**"
      );
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel)
      return message.channel.send("**Please Join A Voice Channel First!**");
    if (
      !voiceChannel
        .permissionsFor(message.client.user)
        .has(["CONNECT", "SPEAK"])
    ) {
      return message.channel.send(
        "**Missing Permissions For The Voice Channel! - [CONNECT, SPEAK]**"
      );
    }
    
    if (bot.voice.connections.has(voiceChannel.guild.id))
      return message.channel.send("**I Am Already Converting TTS!**");
    try {
      const connection = await voiceChannel.join();
      const { url } = await request
        .get("http://tts.cyzon.us/tts")
        .query({ text });
      const dispatcher = connection.play(url);
      await message.react("🔉");
      dispatcher.once("finish", () => voiceChannel.leave());
      dispatcher.once("error", () => voiceChannel.leave());
      return null;
    } catch (err) {
      voiceChannel.leave();
      console.log(err)
      return message.channel.send(
        `**Oh No, An Error Occurred: Try Again Later!**`
      );
    }
  }
};