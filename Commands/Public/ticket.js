const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  PermissionFlagsBits,
  ChannelType,
} = require("discord.js");

const { loadCommands } = require("../../Handlers/commandHandler");
const { loadEvents } = require("../../Handlers/eventHandler");

module.exports = {
  guildOwnerOnly: false,
  guildOnly: false,
  developer: true,
  data: new SlashCommandBuilder()
    .setName("ticket")
    .setDescription("Create/Delete ticket.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addSubcommand((options) =>
      options.setName("create").setDescription("Create ticket.")
    )
    .addSubcommand((options) =>
      options.setName("delete").setDescription("Delete ticket.")
    ),
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */
  execute(interaction) {
    const subCommand = interaction.options.getSubcommand();

    switch (subCommand) {
      case "create":
        {
          async () => {
            const thread = interaction.channel.threads.create({
              name: "Ticket",
              autoArchiveDuration: 300,
              type: ChannelType.GuildPublicThread,
              reason: "Needed a separate thread for moderation",
            });
            interaction.reply({
              content: `Created thread: ${thread.name}`,
              ephemeral: true,
            });
          };
        }
        break;
      case "delete": {
        async () => {
          const thread = interaction.channel.threads.cache.find(
            (x) => x.name === "Ticket"
          );
          await thread.delete();
          interaction.reply({
            content: `Deleted thread: ${thread.name}`,
            ephemeral: true,
          });
        };
        break;
      }
    }
  },
};
