const path = require("path");
const fs = require("fs");
const botToken = fs.readFileSync(path.join(__dirname, "bot-token"), "utf8");
const appId = fs.readFileSync(path.join(__dirname, "application-id"), "utf8");
const draw = require(path.join(__dirname, "daruma-draw"));

const { Client, Intents, MessageAttachment } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("messageCreate", (message) => {
  console.l;
  if (!message.content.startsWith("-d")) return;
  let seeds = {
    red: Math.floor(parseInt(message.author.id.substring(0, 6)) % 255),
    green: Math.floor(parseInt(message.author.id.substring(6, 12)) % 255),
    blue: Math.floor(parseInt(message.author.id.substring(12, 18)) % 255),
  };
  let color = `rgb(${seeds.red},${seeds.green},${seeds.blue})`;
  let command = message.content.toLowerCase().split(" ");
  switch (command[1]) {
    case "neko":
      message.channel.send({
        files: [
          {
            attachment: draw.drawNeko(color),
            name: `d-neko-${message.author.id}.png`,
          },
        ],
      });
      return;
    case "angry":
      message.channel.send({
        files: [
          {
            attachment: draw.drawAngry(color),
            name: `d-angr-${message.author.id}.png`,
          },
        ],
      });
      return;
    case "base":
      message.channel.send({
        files: [
          {
            attachment: draw.drawBase(color),
            name: `d-base-${message.author.id}.png`,
          },
        ],
      });
      return;
    default:
      return;
  }
});
client.login(botToken);