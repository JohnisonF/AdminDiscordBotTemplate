const logger = require('./logger');

async function interactionCreate(interaction, client) {
    console.log(interaction)
    if(!interaction.isChatInputCommand()) return;
        const command = interaction.client.commands.get(interaction.commandName);

    if(!command) {
        logger.error("Erro: comando não encontrado!")
    }

    let params = {
        interaction: interaction,
    }

    if(interaction.commandName == 'ping') {
        params.ping = client.ws.ping;
    }

    if(interaction.commandName == 'myuser') {
        params.message = interaction.message
    }

    try {
        await command(params);
    }
    catch(e) {
        logger.error(e)
    }
}

async function messageCreate(message) {
    if (message.content === '!hello') {
        message.reply('Hello!');
    }
}

module.exports = {
    interactionCreate,
    messageCreate
}

