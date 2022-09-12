const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
  ActivityType,
} = require("discord.js");
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;
const client = new Client({
  intents: [Guilds, GuildMembers, GuildMessages],
  partials: [User, Message, GuildMember, ThreadMember],
});

client.events = new Collection();
client.commands = new Collection();

const { loadEvents } = require("./Handlers/eventHandler");

loadEvents(client);

const { connectData } = require("./database")

connectData();

client.login(process.env.DISCORD_TOKEN).then(() => {
  setInterval(() => {
    client.user.setActivity(`/help`, {
      type: ActivityType.Playing,
    });
  });
});
