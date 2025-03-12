# TPC4: Express e Pug
- 📅 **Data**: 12/03/2025
- 👤 **Aluno**: Gonçalo Antunes Corais, A100599
<img src="../foto.jpeg" alt="Fotografia" width="200"/>

## Resumo

O código desenvolvido tem como objetivo construir um Node.js, com recurso à ferramenta express e à linguagem pug, que consome uma API de dados e gera as seguintes páginas web:

- **[/](routes/index.js)** - página inicial

- **[/filmes](routes/index.js)** - página com os filmes e as respetivas informações e uma coluna de ações para editar ou apagar o filme

- **[/filmes/edit/:id](routes/index.js)** - Página para editar informações de um filme específico

- **[/filmes/delete/:id](routes/index.js)** - Para remover um filme

- **[/actor/:d](routes/index.js)** - Página com uma lista de filmes em que um determinado ator entrou

## Execução

Para executar o código é preciso seguir esta ordem de comandos:

`json-server --watch cinema.json` - para inicializar o json-server

`npm i` - para instalar as dependências necessárias

`npm start` - para iniciar o servidor