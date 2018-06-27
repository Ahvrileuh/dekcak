//import { Guild } from 'discord.js';

const Discord = require('discord.js');

var bot = new Discord.Client();

//var prefix = ("!");
var angryLevel = -1;
var Copy = 10;
var condition1 = false;


bot.on('ready', ()=> {
	console.log("FORLAN is ready");
});

bot.login('NDYxNTg1MDIxNjMxNzI1NTg5.DhVcyg.aELO06PPMluMsxFNsEkXinFuHc4');

	bot.on('message', message => {

	if(message.content === "noraj")
	{
		message.channel.send("*Sois gentil, pas méchant, c'est pas gentil d'être méchant, c'est mieux d'être gentil !*");
		condition1 = false;
	}
});
