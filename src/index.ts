import path = require('path')
import fs = require('fs')
import { Message, Client, Intents} from 'discord.js'
import { Daruma } from './daruma'

const botToken: string = fs.readFileSync(path.join(__dirname, '..', "bot-token"), "utf8");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on("messageCreate", (message: Message) => {
  if (!message.content.trim().toLowerCase().startsWith("-d")) return
  let seeds = {
    red: Math.floor(parseInt(message.author.id.substring(0, 6)) % 255),
    green: Math.floor(parseInt(message.author.id.substring(6, 12)) % 255),
    blue: Math.floor(parseInt(message.author.id.substring(12, 18)) % 255),
  }
  let colorString = `rgb(${seeds.red},${seeds.green},${seeds.blue})`
  //colorString = `rgb(${255},${255},${255})`
  let daruma = new Daruma(colorString)
  message.channel.send({
      files: [
          {
              attachment: daruma.getEmote(),
              name: `d-emote-${message.author.id}.gif`
          }
      ],
      content: 'Tester'
    }
  )
  let command = message.content.trim().toLowerCase().split(" ")
  //   switch (command[1]) {
//     case "neko":
//       message.channel.send({
//         files: [
//           {
//             attachment: draw.drawNeko(color),
//             name: `d-neko-${message.author.id}.png`,
//           },
//         ],
//       })
//       return
//     case "angry":
//       message.channel.send({
//         files: [
//           {
//             attachment: draw.drawAngry(color),
//             name: `d-angr-${message.author.id}.png`,
//           },
//         ],
//       })
//       return;
//     case "base":
//       message.channel.send({
//         files: [
//           {
//             attachment: draw.drawBase(color),
//             name: `d-base-${message.author.id}.png`,
//           },
//         ],
//       })
//       return;
//     case "say":
//       message.channel.send({
//         files: [
//           {
//             attachment: draw.say(color, message.content.substring(message.content.toLowerCase().indexOf('say') + 3, message.content.length)),
//             name: `d-say-${message.author.id}.gif`,
//           },
//         ],
//       })
//       return
//     default:
//       return
//   }
});
client.login(botToken)
