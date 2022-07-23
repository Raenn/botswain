Simple discord bot for rolling dice in the [Sea of Thieves TTRPG](https://seaofthieves.fandom.com/wiki/Sea_of_Thieves_Roleplaying_Game).

# Setup

1. Set up a discord bot (there's many guides, [this one](https://discordjs.guide/preparations/setting-up-a-bot-application.html) covers the setup and has a subsequent guide for inviting it to servers)
	* I believe you will need to enable the `Message Content Intent` in the Bot settings - look for "message content" and enable it
2. Modify `auth.json` to include your app token you receive when setting up your bot
3. Run `npm i`
4. Run `node bot.js` to start the server! Activate it by sending a message e.g. `!roll 3`