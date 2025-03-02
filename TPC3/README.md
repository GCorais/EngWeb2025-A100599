# TPC3: Gestão de Alunos
- 📅 **Data**: 02/03/2025
- 👤 **Aluno**: Gonçalo Antunes Corais, A100599
<img src="../foto.jpeg" alt="Fotografia" width="200"/>

## Resumo

O código desenvolvido tem como objetivo construir uma aplicação web de gestão de alunos permitindo a edição, remoção e visualização de informações dos mesmos. Cada uma destas ações possui uma página específica para a realizar:

- **[/](alunos_server_skeleton.js)** ou **[/alunos](alunos_server_skeleton.js)** - página inicial com a lista de alunos

- **[/alunos/registo](alunos_server_skeleton.js)** - página para registar novos alunos. Aqui é necessário preencher os campos Id, nome e git para permitir a submissão

- **[/alunos/:id](alunos_server_skeleton.js)** - página de um aluno específico

- **[/alunos/edit/:id](alunos_server_skeleton.js)** - página para editar as informações de um aluno

Para conseguir realizar este trabalho de casa tivemos de recorrer aos métodos GET para ir buscar as informações, POST para enviar dados ao servidor, PUT para editar informações e DELETE para remover o registo 
de um aluno.

## Execução

Para executar o código é preciso seguir esta ordem de comandos:

`json-server --watch alunos.json` - para inicializar o json-server

`npm install axios` - para instalar as dependências necessárias

`node alunos_server_skeleton.js` - para iniciar o servidor