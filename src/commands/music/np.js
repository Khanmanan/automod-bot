const { EMBED_COLORS } = require("@root/config");
const { Command } = require("@src/structures");
const { Message, MessageEmbed, CommandInteraction } = require("discord.js");
const prettyMs = require("pretty-ms");
const { splitBar } = require("string-progressbar");

module.exports = class Skip extends Command {
  constructor(client) {
    super(client, {
      name: "np",
      description: "show's what track is currently being played",
      category: "MUSIC",
      botPermissions: ["EMBED_LINKS"],
      command: {
        enabled: true,
        aliases: ["nowplaying"],
      },
      slashCommand: {
        enabled: true,
      },
    });
  }

  /**
   * @param {Message} message
   * @param {string[]} args
   */
  async messageRun(message, args) {
    const response = nowPlaying(message);
    await message.reply(response);
  }

  /**
   * @param {CommandInteraction} interaction
   */
  async interactionRun(interaction) {
    const response = nowPlaying(interaction);
    await interaction.followUp(response);
  }
};

function nowPlaying({ client, guildId }) {
  const player = client.musicManager.get(guildId);
  if (!player || !player.queue.current) return "🚫 No music is being played!";

  const track = player.queue.current;
  const end = track.duration > 6.048e8 ? "🔴 LIVE" : new Date(track.duration).toISOString().slice(11, 19);

  const embed = new MessageEmbed()
    .setColor(EMBED_COLORS.BOT_EMBED)
    .setAuthor("Now Playing ♪", client.user.displayAvatarURL())
    .addField(`Playing`,`[${track.title}](${track.uri})`)
    .addField(
      "Position",
      new Date(player.position).toISOString().slice(11, 19) +
        " [" +
        splitBar(track.duration > 6.048e8 ? player.position : track.duration, player.position, 15)[0] +
        "] " +
        end,
      false
    )
    .addField("Position in Queue", (player.queue.size - 0).toString(), true)
    .addField("\u200b","\u200b")
    .addField("Song Duration", "`" + prettyMs(track.duration, { colonNotation: true }) + "`", true)
    .addField("Added By", track.requester.tag || "NA", true);

  if (typeof track.displayThumbnail === "function") embed.setThumbnail(track.displayThumbnail("hqdefault"));

  return { embeds: [embed] };
}
