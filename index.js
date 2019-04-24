require('newrelic');

discordIRC = require('discord-irc').default;

var env = process.env.NODE_ENV || 'development';
if(env == 'development') {
	require('dotenv').config();
}

var http = require('http');
http.createServer().listen(process.env.PORT || 3000);

const data = require('./config');
discordIRC(data);
