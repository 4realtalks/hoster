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
    .setName("say-hi")
    .setDescription("Say hello to user."),
  /**
   *
   * @param { ChatInputCommandInteraction } interaction
   */
  execute(interaction) {
    interaction.reply({
      content: `Hello ${userMention(interaction.user.id)}, I'm PreciousBot.`,
      ephemeral: false,
    });
  },
};
