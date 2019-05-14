discordIRC = require('discord-irc').default;

var env = process.env.NODE_ENV || 'development';
if(env == 'development') {
	require('dotenv').config();
}

const data = require('./config');
discordIRC(data);
