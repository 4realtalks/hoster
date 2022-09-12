const {
  ChatInputCommandInteraction,
  GuildMemberManager,
} = require("discord.js");

module.exports = {
  name: "interactionCreate",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  execute(interaction, client) {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command)
      return interaction.reply({
        content: "This command is outdated.",
        ephemeral: true,
      });

    if (command.developer && interaction.user.id !== "967833698827386891")
      return interaction.reply({
        content: "This command is only for developer.",
        ephemeral: true,
      });

    if (command.guildOnly && interaction.guildId !== "1013333057748598834")
      return interaction.reply({
        content: "This command if can only be used in Support Server.",
        ephemeral: true,
      });

    if (
      command.guildOwnerOnly &&
      interaction.user.id !== interaction.guild.ownerId
    )
      return interaction.reply({
        content: "This command is not for you.",
        ephemeral: true,
      });

    command.execute(interaction, client);
  },
};
