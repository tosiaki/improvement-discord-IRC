module.exports = [
	{
		"nickname": "Improvement-Discord",
		"server": "irc.rizon.net",
		"discordToken": process.env.DISCORD_TOKEN,
		"autoSendCommands": [
			["PRIVMSG", "NickServ", "Identify " + process.env.IRC_PASSWORD]
		],
		"channelMapping": {
			"#general": "#improvement"
		}
	}
]
