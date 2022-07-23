var config = require("./auth.json");
const {token} = config;
const {Client, GatewayIntentBits} = require("discord.js")

const emoji = [
	':skull_crossbones:',
	':bone:',
	':bone:',
	':coin:',
	':coin:',
	':moneybag:',
]

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`)
})

client.on('messageCreate', interaction => {

	// console.log(interaction);
	const message = interaction.content;

	if (message.substring(0, 1) == '!') {
		var args = message.substring(1).split(' ');
		var cmd = args[0];

		switch(cmd) {
			case 'roll':
				if (args[1] == undefined) {
					interaction.reply('Arr, how many dice, deckswabber?!')
				}
				else {
					const diceCount = parseInt(args[1]);
					if (isNaN(diceCount)) {
						interaction.reply('That be not a number, nitwit!');
					} else if (diceCount < 1) {
						interaction.reply('I be needin\' _some_ dice to roll, land lubber...');
					} else if (diceCount > 10) {
						interaction.reply('Arr, why I can\'t I hold all these dice?!');
					} else {
						var response = ""
						for (var i = 0; i < diceCount; i++) {
							var index = Math.floor(Math.random() * 6)
							response += emoji[index]
						}

						interaction.reply(response);
					}
				}
				break;

			 }
	 }
});

client.login(token)
