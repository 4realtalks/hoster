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
  data: new SlashCommandBuilder().setName("help").setDescription("Get help."),
  /**
   *
   * @param { ChatInputCommandInteraction } interaction
   */
  execute(interaction) {
    interaction.reply({
      content: "Check your DM!",
      ephemeral: true,
    });
    interaction.user.send({
      embeds: [
        {
          title: "Help",
          color: 16711680,
          description:
            "**Sorry this bot is current work in progress.**\n\nHere is some commands to be getting helped.\n\n**━━━━━━━Developer━━━━━━━**\n\n`/reload commands` | *Reload the commands.*\n`/reload events` | *Reload the events.*\n\n**━━━━━━━Server Only━━━━━━━**\n\n*Nothing for now*😥\n\n**━━━━━━━━Public━━━━━━━━**\n\n`/kick` | *Kick member. (WIP)*\n`/ban` | *Ban member. (WIP)*\n`/warn` | *Kick member. (WIP)*\n`/meme` | *Send the meme. (WIP)*\n`/joemama` | *Joemama. (WIP)*\n`/2ownerchannel` | *2ownerchannel. (WIP)*\n`/ticket` | *Create/Delete ticket. (WIP)*\n`/say-hi` | *Say hello to user.*\n`/invite-link` | *Get the support server invite link.*\n`/help` | *Get help.*\n\n**━━━━━━━━━━━━━━━━━━━**",
          timestamp: "2021-12-31T17:00:00.000Z",
          author: {
            name: "PreciousBot",
            icon_url:
              "https://cdn.discordapp.com/attachments/998197624115056753/1016247233433309245/P.png",
          },
          image: {
            url: "",
          },
          thumbnail: {
            url: "https://cdn.discordapp.com/attachments/998197624115056753/1016247233433309245/P.png",
          },
          footer: {
            text: "PreciousBot",
            icon_url:
              "https://cdn.discordapp.com/attachments/998197624115056753/1016247233433309245/P.png",
          },
          fields: [
            {
              name: "Support Server",
              value: "https://discord.gg/VJHBWqwDyS",
              inline: false,
            },
            {
              name: "Invite the bot",
              value:
                "https://discord.com/api/oauth2/authorize?client_id=1015524485891358761&permissions=8&scope=applications.commands%20bot",
            },
          ],
        },
      ],
      components: [],
    });
  },
};
