# TPC5: Mongo
- 📅 **Data**: 24/03/2025  
- 👤 **Aluno**: Gonçalo Antunes Corais, A100599  
<img src="../foto.jpeg" alt="Fotografia" width="200"/>


## Resumo

O código desenvolvido tem como objetivo criar dois serviços separados:

- **`apiAlunos`** – API de dados, construída com **Express** e **Mongoose**, que fornece acesso aos dados dos alunos armazenados em MongoDB.
- **`AppAlunos`** – Interface **frontend**, construída com **Express** e **Pug**, responsável por apresentar e interagir com os dados da API.

Ambos os serviços comunicam via HTTP. A aplicação permite realizar várias operações sobre alunos, como:

- **[/registo](AppAlunos/routes/alunos.js)**

- **[/delete/:id](AppAlunos/routes/alunos.js)**

- **[/edit/:id](AppAlunos/routes/alunos.js)**

- **[/:id](AppAlunos/routes/alunos.js)**

São utilizados os métodos **GET**, **POST**, **PUT** e **DELETE**, com persistência em MongoDB através de **Mongoose**.


## Execução

Para conseguir  correr o código é preciso seguir estes comandos:

`docker start mongoEW` para iniciar o mongo

`npm i` para instalar as dependências necessárias

`npm start` para correr o código. Nest caso é necessário executar o comando nas 2 pastas
