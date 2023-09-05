# Um modelo para um bot administrativo do Discord

Este projeto foi feito com o Discord.js com o intuito de ajudar e criar bots de discord de uma forma mais fácil e de forma mais organizada.

# Linguagens e pacotes

Javascript vanilla com os pacotes mais importantes: Discord.js e Express

# Comandos

Fiz apenas dois comandos inicialmente: `/ping` que mostra o ping e o `/myuser` que mostra as informações do usuário que chamou o comando.
Em breve farei mais comandos! :)

# Tutorial

Abra o terminal na raiz do projeto e use o comando `npm install` para instalar todos os pacotes necessários e depois `npm start` para iniciar o bot após feita a configuração no `.env`.

# Pasta e Arquivos

`index.js`: Arquivo principal para o Bot, aonde faço as configurações principais do `Client` e inicio ele.

`eventFunctions.js`: Arquivo onde deixo as funções que são chamadas dependendo do evento que o `Client` recebe.

`registerCommands.js`: Arquivo onde fica a configuração do cadastro dos `Slash Commands` para esse Bot.

`/slash_commands`: Pasta onde ficam guardados os `Slash Commands`.

`/logger`: Pasta de configuração do do logger(pino).

`sample.env`: Edite este arquivo com as seus próprios tokens de bot. Após isso renomeie o arquivo de `sample.env` para `.env`.
