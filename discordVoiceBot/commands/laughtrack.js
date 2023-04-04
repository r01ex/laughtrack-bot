const { SlashCommandBuilder } = require('discord.js');
const { getVoiceConnection } = require('@discordjs/voice');
const { generateDependencyReport, AudioPlayerStatus, joinVoiceChannel, createAudioPlayer, createAudioResource } = require('@discordjs/voice');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('laughtrack')
		.setDescription('haha'),
	async execute(interaction) {
		const connection = getVoiceConnection("885202547365789787");
		if (connection != undefined) {
			if (interaction.member.roles.cache.some(role => role.name === 'bot_kontol')) {
				const player = createAudioPlayer();
				const resource = createAudioResource('./sounds/laughtrack.mp3');
				console.log("in if l");
				console.log(resource);
				player.on(AudioPlayerStatus.Playing, () => {
					console.log('The audio player has started playing!');
				});
				player.on('error', error => {
					console.error(`Error: ${error.message} with resource`);
				});
				await player.play(resource);
				const subscription = connection.subscribe(player);
				if (subscription) {
					setTimeout(() => subscription.unsubscribe(), 5_000);
				}
			}
			await interaction.reply('haha');
		}
		else {
			console.log("not in voice chat");
		}
	},
};