const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
  ActivityType,
} = require("discord.js");
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;
const keepAlive = require(`./server`);
const client = new Client({
  intents: [Guilds, GuildMembers, GuildMessages],
  partials: [User, Message, GuildMember, ThreadMember],
});

client.events = new Collection();
client.commands = new Collection();

const { loadEvents } = require("./Handlers/eventHandler");

loadEvents(client);

const { connect } = require("mongoose");

connect({}, process.env.DatabaseURL).then(() =>
  console.log("Connected to Database.")
);

client.login(process.env.DISCORD_TOKEN).then(() => {
  setInterval(() => {
    client.user.setActivity(`${client.guilds.cache.size} server(s)`, {
      type: ActivityType.Watching,
    });
  });
});
keepAlive();
