const express = require('express');
const logger = require('./logger');
const { Client, Events, GatewayIntentBits, Collection, REST, Routes } = require('discord.js');
const { dataPing, Ping } = require('./slash_commands/ping');
const { dataMyUser, MyUser } = require('./slash_commands/myuser');
const { interactionCreate, messageCreate } = require('./eventFunctions');
const registerCommands = require('./registerCommands');
require('dotenv').config();

// Instancia a API Rest do discord.js
const rest = new REST({version: "10"}).setToken(process.env.DISCORD_TOKEN);

// Crie uma instância do cliente do Discord.js
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
  ],
});

client.on(Events.MessageCreate, messageCreate); // Evento de criação de mensagem Discord.js
client.on(Events.InteractionCreate, function (interaction) { interactionCreate(interaction, client) }); // Evento de interação do usuário
  
client.on('ready', (e) => {
  registerCommands(client,rest) // Chamo minha função que registra os comandos

  logger.info(`O bot '${client.user.username}' foi iniciado em ${client.guilds.cache.size} servidores com ${client.ws.ping}ms de ping.`);
  client.on('raw', async (e) => {
    
  });
});

// Inicie o cliente do Discord.js
client.login(process.env.DISCORD_TOKEN);

// Configuração do servidor Express
// const app = express();
// const port = 3000;

// // Inicia o servidor Express
// app.listen(port, () => {
//   console.log(`Servidor Express rodando em http://localhost:${port}`);
// });