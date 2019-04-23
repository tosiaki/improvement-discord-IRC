require('dotenv').config();

import discordIRC from 'discord-irc';
import config from './config.json';
discordIRC(config);
