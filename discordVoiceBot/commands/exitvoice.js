const { joinVoiceChannel } = require('@discordjs/voice');
const { SlashCommandBuilder } = require('discord.js');
const { getVoiceConnection } = require('@discordjs/voice');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('exitvoice')
		.setDescription('exit voicechat!'),
	async execute(interaction) {
		const connection = getVoiceConnection("885202547365789787");
		if (connection != undefined) {
			if (interaction.member.roles.cache.some(role => role.name === 'bot_kontol')) {
				connection.destroy();
			}
			await interaction.reply('exited!');
		}
		else {
			console.log("not in voice chat");
		}
	},
};
