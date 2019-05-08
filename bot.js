/*
  This is the main JS file for the bot. Where all the events are captured
  and the instantiation of the Discord Client Class takes place.
*/
const Discord = require("discord.js");
const config = require("./config.json");
const util = require("./util");

// Create a new instance of the Discord Client Class.
const bot = new Discord.Client();

// Ready is emitted whenever a message is created.
bot.on("ready", () => {
  const { discord } = util;
  // A little message to show that the bot has connected.
  console.log(
    `Bot is up and running, with ${discord.getOnlineUsers(
      bot.users
    )} online users, in ${discord.getTextChannels(
      bot.channels
    )} text channels and ${discord.getVoiceChannels(
      bot.channels
    )} voice channels.`
  );
});

// Message is emitted whenever the bot notices a new message.
bot.on("message", message => {
  // Destructure the message parameter so we don't repeat ourselves.
  const { author, channel, content, createdTimestamp } = message;

  // If the message doesn't contain the command prefix, we might as well leave it alone.
  if (content.indexOf(config.prefix) !== 0) return;

  // No point dealing with the message if it was sent by a bot!
  if (author.bot) return;

  // Get the the command if it was the first word that was sent.
  const command = util.discord.getCommand(message);

  // If the command that was sent matches any of the commands that we have configured...
  if (command === "ping") {
    // It's nice to have a log of when the command was sent for future reference along with the person that sent it.
    console.log(
      `Command [${config.prefix + command}] Received from ${
        author.username
      } at ${util.helpers.convertTime(createdTimestamp)}`
    );

    // Send a message to the channel where the initial message came from.
    channel.send("Pong!");
  }
});

// This establishes a websocket connection to Discord.
bot.login(config.token);
