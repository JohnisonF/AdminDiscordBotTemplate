const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
    dataMyUser: new SlashCommandBuilder()
    .setName('myuser')
    .setDescription('Retorna informações sobre o usuário que chamou este comando'),

    async MyUser(params) {
        const member = params.interaction.member;
        const joinDate = member.guild.joinedAt; // Obtém a data de entrada do membro no servidor
        const currentDate = new Date();
        const timeDifference = currentDate - joinDate; // Calcula a diferença em milissegundos
        const nickname = member.nickname;
        const id = member.id;
        const tag = member.user.tag;
        const color = member.roles.highest.hexColor;
        
        let cargos = member.roles.cache.map(r => r.name != "@everyone" ? r.name : null);
        if(cargos.includes(null)) {
            cargos.splice(cargos.indexOf(null), 1); // Retiro o cargo @everyone
        }
        cargos = cargos.join(', ');
        const daysInServer = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); 

        let arrFields = [
            { name: 'ID', value: id+"", inline: true },
            { name: 'Tag', value: tag+"", inline: true },
            { name: 'Dias no servidor', value: daysInServer+"", inline: true }
        ]

        if(nickname) {
            arrFields.push({ name: 'Nick', value: nickname+"", inline: true });
        }

        // Converte a diferença em milissegundos para dias
    
        const embeds = new EmbedBuilder()
            .setColor(color)
            .setAuthor({ name: member.user.username, iconURL: member.user.avatarURL(), url: 'https://discordapp.com/users/'+member.user.id })
            .addFields(arrFields)
            .setImage(member.user.avatarURL())
            .setTimestamp()
            .setFooter({ text: member.user.username, iconURL: member.guild.iconURL() });
    
        await params.interaction.reply({ embeds: [embeds]})
    }
}


