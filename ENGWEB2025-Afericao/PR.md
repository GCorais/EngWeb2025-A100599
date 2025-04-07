# Aferição
- 📅 **Data**: 07/04/2025  
- 👤 **Aluno**: Gonçalo Antunes Corais, A100599  
<img src="../foto.jpeg" alt="Fotografia" width="200"/>

## Introdução

Antes de começar, foi necessário fazer algumas alterações ao ficheiro JSON que nos foi dado de maneira a garantir que o MongoDB o conseguisse ler e executar.

Em primeiro lugar, foi criado um script db.py com o objetivo de transformar corretamente os arrays que, no ficheiro original, estavam representados como strings. Esta conversão foi essencial para assegurar que os dados fossem interpretados corretamente como listas durante a inserção na base de dados.

Para além disso, depois de copiar esta nova base de dados (`livros.json`) para /tmp, recorri ao comando `jq 'map(.bookId as $id | del(.bookId) | ._id = $id)' livros.json > out.json` para criar out.json e guardar os id como _id em vez de bookId, tal como é exigido pelo MongoDB. 

Em relação aos valores numéricos, uma vez que não seria necessário realizar operações matemáticas, decidi que não valia a pena estar a mudá-los de string para floats/int/double.

## MongoDB

Para o MongoDB conseguir ler a minha base de dados realizei os seguintes comandos:

```
python3 db.py
docker start mongoEW
docker cp livros.json mongoEW:/tmp
docker exec -it mongoEW sh
cd /tmp
jq 'map(.bookId as $id | del(.bookId) | ._id = $id)' livros.json
jq 'map(.bookId as $id | del(.bookId) | ._id = $id)' livros.json > out.json
mongosh
use livros
db.livros.drop()
docker exec mongoEW mongoimport -d livros -c livros /tmp/out.json --jsonArray
docker exec -it mongoEW sh
```

## Resolução

Para o exercício das queries, criei o ficheiro `queries.txt` com os comandos necessários para conseguir resolver cada pergunta no mongosh.

Para executar o código é preciso executar os seguintes comandos:

```
cd ex1/apiDados
npm i
npm i mongoose
npm start
```

```
cd ex2/interface
npm i
npm i axios
npm start
```