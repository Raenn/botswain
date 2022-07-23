var Discord = require('discord.io');

var token = require("./auth.json").token;
const permissionsInteger = 1073810432;

// Initialize Discord Bot
var bot = new Discord.Client({
	token: token,
	autorun: true
});

bot.on('ready', function (evt) {
	console.log("started!")
});

bot.on('message', function (user, userID, channelID, message, evt) {

// Our bot needs to know if it will execute a command
// It will listen for messages that will start with `!`

const emoji = [
	':skull_crossbones:',
	':bone:',
	':bone:',
	':coin:',
	':coin:',
	':moneybag:',
]

if (message.substring(0, 1) == '!') {
	var args = message.substring(1).split(' ');
	var cmd = args[0];

	switch(cmd) {
		case 'roll':
			if (args[1] == undefined) {
				bot.sendMessage({
							to: channelID,
							message: 'Arr, how many dice, deckswabber?!'
					});
			}
			else {
				const diceCount = parseInt(args[1]);
				if (isNaN(diceCount)) {
					bot.sendMessage({
								to: channelID,
								message: 'That be not a number, nitwit!'
						});
				} else if (diceCount < 1) {
					bot.sendMessage({
								to: channelID,
								message: 'I be needin\' _some_ dice to roll, land lubber...'
						});
				} else if (diceCount > 10) {
					bot.sendMessage({
								to: channelID,
								message: 'Arr, why I can\'t I hold all these dice?!'
						});
				} else {
					var message = ""
					for (var i = 0; i < diceCount; i++) {
						var index = Math.floor(Math.random() * 6)
						message += emoji[index]
					}

					bot.sendMessage({to: channelID, message});
				}
			}
			break;

		 }
 }
});