require('dotenv').config();

import discordIRC from 'discord-irc';
const data = require('config.js');

discordIRC(data);
