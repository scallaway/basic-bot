/*
  This is the main JS file for the bot. Where all the events are captured
  and the instantiation of the Discord Client Class takes place.
*/

// The various imports for the bot
const Discord = require('discord.js');
const config = require('./config.json');
const util = require('./util');

// Create a new instance of the Discord Client Class.
const bot = new Discord.Client();

// Ready is emitted whenver the bot is up and running successfully.
bot.on('ready', () => {
  // Log to the console that the bot has created and connected correctly.
	console.log(`Bot is up and running, with ${ util.discord.getOnlineUsers(bot.users) } online users, in ${ bot.channels.size } channels.`);
});

// Message is emitted whenever a message on the server is sent.
bot.on('message', async message => {
  // No point dealing with the message if it was sent by a bot!
	if (message.author.bot) return;

  // If the message doesn't contain the command prefix, we might as well leave it alone.
	if (message.content.indexOf(config.prefix) !== 0) return;

  // Get the the command if it was the first word that was sent.
	const command = util.discord.getCommand(message);

  // If the command that was sent matches any of the commands that we have configured...
	if (command === 'ping') {
    // It's nice to have a log of when the command was sent for future reference along with the person that sent it.
		console.log(`Command [${ config.prefix + command }] Received from ${ message.author.username } at ${ util.helpers.convertTime(message.createdTimestamp) }`);

    // Send a message to the channel where the initial message came from.
    const m = await message.channel.send('Pong!');
  }
});

// This logs the bot into the server itself.
bot.login(config.token);
