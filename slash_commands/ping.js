const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    dataPing: new SlashCommandBuilder()
    .setName('ping') // Em caixa baixa
    .setDescription('Responde com o ping'),
    
    async Ping(params) {
        await params.interaction.reply(`O ping está em ${params.ping}ms`);
    }
}