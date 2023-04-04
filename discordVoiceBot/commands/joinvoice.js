const { joinVoiceChannel } = require('@discordjs/voice');
const { SlashCommandBuilder } = require('discord.js');
const { getVoiceConnection } = require('@discordjs/voice');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('joinvoice')
		.setDescription('Join 1st voicechat!'),
	async execute(interaction) {
		console.log(interaction.user.username);
		console.log(interaction.member.roles.cache.some(role => role.name === 'bot_kontol'));
		//if (getVoiceConnection(voiceChannel_1.guild.id) == undefined) {
		if (interaction.member.roles.cache.some(role => role.name === 'bot_kontol')) {
			console.log("in if");
			const connect = joinVoiceChannel({
				channelId: '885202547848146947',
				guildId: "885202547365789787",
				adapterCreator: interaction.guild.voiceAdapterCreator,
			});
			await interaction.reply('Joined!');
		}
		//}
		//else {
		//	console.log("already in voice chat");
        //}
	},
};
