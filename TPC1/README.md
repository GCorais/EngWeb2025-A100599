# TPC1: Oficina de Reparação
- 📅 **Data**: 17/02/2025
- 👤 **Aluno**: Gonçalo Antunes Corais, A100599
<img src="../foto.jpeg" alt="Fotografia" width="200"/>

## Resumo

O código desenvolvido tem como objetivo construir uma aplicação web desenvolvida em Node.js para visualizar os dados de uma oficina de reparação. Criei um ficheiro python para organizar os dados do ficheiro json organizando em 3 categorias:

- viaturas
- intervenções
- reparações

#### Página Web

Através do servidor server.js podemos consultar essas viaturas, intervenções e reparações. Vai estar à escuta na porta 1234 e responde a diferentes pedidos:

- **[/](server.js)** - página inicial
- **[/viaturas](server.js)** - Mostra todas as viaturas existentes
- **[/reparacoes](server.js)** - Mostra todas as reparações feitas
- **[/intervencoes](server.js)** - Mostra todas as intervenções feitas

Para além disso é possível ver casos específicos da seguinte maneira:

- Viaturas: **[/viaturas/${id}](server.js)**
- Reparações: **[/reparacoes/${id}](server.js)**
- Intervenções: **[/intervencoes/${codigo}](server.js)**

## Testes

Para organizar os dados no JSON usamos inicialmente o comando:
`python3 organiza_dados.py`

De seguida instalamos as dependências necessárias:
`npm install axios`

Iniciamos o json-server:
`json-server --watch dataset_reparacoes.json`

Finalmente iniciamos o servidor Node.js:
`node server.js`