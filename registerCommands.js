const { dataPing, Ping } = require('./slash_commands/ping');
const { dataMyUser, MyUser } = require('./slash_commands/myuser');
const logger = require('./logger');
const { Collection, REST, Routes } = require('discord.js');

// Faço a instância da API

// Coloco os comandos em JSON para registrar via API
const slashCommandsJson = [
    dataPing.toJSON(),
    dataMyUser.toJSON()
];

async function registerCommands(client, rest) {
    try {
        // Adiciona os comandos para registrar em uma Collection
        client.commands = new Collection();
        client.commands.set(dataPing.name, Ping);
        client.commands.set(dataMyUser.name, MyUser);

        // Envia para a api registrar os comandos
        const data = await rest.put(
          Routes.applicationGuildCommands(process.env.CLIENT, process.env.GUILD),
          { body: slashCommandsJson },
        )
        logger.info('Comandos registrados!')
    }
    catch(e) {
        logger.error(e)
    }
}

module.exports = registerCommands