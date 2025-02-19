# TPC1: Escola de Música
- 📅 **Data**: 19/02/2025
- 👤 **Aluno**: Gonçalo Antunes Corais, A100599
<img src="../foto.jpeg" alt="Fotografia" width="200"/>

## Resumo

O código desenvolvido tem como objetivo construir um serviço node.js que consuma uma API de dados e sirva de website com as seguintes funcionalidades:

- **[/](server.js)** - página principal onde aparecem as opções Listar alunos, Listar Cursos, Listar Instrumentos;

- **[/alunos](server.js)** - página de alunos onde aparece uma tabela com os id's e nomes dos alunos

- **[/alunos/${id}](server.js)** - clicando num id salta para a página de aluno onde aparecem as suas informações;

- **[/cursos](server.js)** - página de cursos onde aparece uma tabela com a informação dos cursos

-  **[/cursos/${id}](server.js)** - clicando num id salta para uma página do curso onde aparece a lista de alunos a frequentá-lo;

- **[/instrumentos](server.js)** - página de instrumentos onde aparece uma tabela com a informação dos instrumentos

-  **[/instrumentos/${id}](server.js)** - clicando num id salta para a página do instrumento onde aparece a lista de alunos que o tocam.

Para além disso, foi criado um ficheiro em javascript(**[pages.js](pages.js)**) que nos permitisse gerar as páginas web em html e com auxílio da framework w3.css.

## Execução

Para executar o código é preciso seguir esta ordem de comandos:

`npm install axios` - para instalar as dependências necessárias

`json-server --watch db.json` - para inicializar o json-server

`node server.js` - para iniciar o servidor