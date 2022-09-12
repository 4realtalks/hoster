const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  userMention,
} = require("discord.js");

module.exports = {
  guildOwnerOnly: false,
  guildOnly: false,
  developer: false,
  providedRolesOnly: false,
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong with your connection info."),
  /**
   *
   * @param { ChatInputCommandInteraction } interaction
   */
  execute(interaction) {
    interaction.reply({
      content: `🏓Latency is ${
        Date.now() - message.createdTimestamp
      }ms. API Latency is ${Math.round(client.ws.ping)}ms`,
      ephemeral: true,
    });
  },
};
