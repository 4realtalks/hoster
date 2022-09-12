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
    .setName("invite-link")
    .setDescription("Get the support server invite link."),
  /**
   *
   * @param { ChatInputCommandInteraction } interaction
   */
  execute(interaction) {
    interaction.reply({
      content: `The Support Server invite link is: https://discord.gg/VJHBWqwDyS`,
      ephemeral: false,
    });
  },
};
