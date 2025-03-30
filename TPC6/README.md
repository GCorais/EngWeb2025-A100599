# TPC6: MongoDB dos Contratos
- 📅 **Data**: 30/03/2025  
- 👤 **Aluno**: Gonçalo Antunes Corais, A100599  
<img src="../foto.jpeg" alt="Fotografia" width="200"/>


## Resumo

O código desenvolvido tem como objetivo implementar uma interface e uma API de dados usando o MongoDB. Numa primeira fase, criei o ficheiro `csv2json.py` para conseguir colocar o CSV no formato de JSON que o MongoDB aceitasse.

A primeira é responsável pela parte visível desta implementação. Responde na porta 16001 e ao colocar no browser o endereço `http://localhost:16001` irá enviar para a página principal com uma lista de contratos com as respetivas informações. Em 2 delas, Id e NIPC da entidade comunicante, é possível clicar no campo enviando para um browser específico. No caso do Id, vão aparecer todas as informações existentes desse contrato. Para o NIPC da entidade comunicante, vão aparecer o NIPC e o nome da entidade, uma tabela com os contratos dessa entidade e um somatório do valor dos contratos. Nas 2 existe também um botão que envia o utilizador para a página principal.

A API de dados, responde na porta 16000 e utilizo o método GET, POST, PUT e DELETE para conseguir realizar as seguintes ações:

- GET /contratos: devolve uma lista com todos os registos;
- GET /contratos/:id: devolve o registo com identificador id (corresponde ao idcontrato);
- GET /contratos?entidade=EEEE: devolve a lista dos contratos correspondentes à entidade EEEE;
- GET /contratos?tipo=AAA: devolve a lista dos contratos com tipo de procedimento igual a AAA;
- GET /contratos/entidades: devolve a lista de entidades comunicantes ordenada alfabeticamente e sem repetições;
- GET /contratos/tipos: devolve a lista dos tipos de procedimento ordenada alfabeticamente e sem repetições;
- POST /contratos: acrescenta um registo novo à BD;
- DELETE /contratos/:id: elimina da BD o registo com o identificador id;
- PUT /contratos/:id: altera o registo com o identificador id.

## Execução

Para conseguir  correr o código é preciso seguir estes comandos:

`docker start mongoEW` para iniciar o mongo

`npm i` para instalar as dependências necessárias

`npm start` para correr o código. Nest caso é necessário executar o comando nas 2 pastas