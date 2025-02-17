const http = require('http')
const axios = require('axios')

http.createServer((req, res) => {
    console.log("METHOD: " + req.method)
    console.log("URL: " + req.url)
    
    switch (req.method) {
        case "GET":

            if (req.url == "/") {
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
                res.write("<h1>Listas:</h1>")
                res.write("<ul>")
                res.write(`<li><a href='/reparacoes'>Lista de reparações</a></li>`)
                res.write(`<li><a href='/intervencoes'>Lista de intervenções</a></li>`)
                res.write(`<li><a href='/viaturas'>Lista de viaturas</a></li>`)
                res.write("</ul>")
                res.end()
            }

            else if (req.url.match(/\/reparacoes\/.+/)) {
                var id = req.url.split("/")[2]
                axios.get(`http://localhost:3000/reparacoes/${id}`)
                    .then(resp => {
                        var reparacao = resp.data
                        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
                        res.write(`<h1>Reparação: ${reparacao.id}</h1>`)
                        res.write(`<p>Id: ${reparacao.id}</p>`)
                        res.write(`<p>Nome do Cliente: ${reparacao.cliente.nome}</p>`)
                        res.write(`<p>NIF do Cliente: ${reparacao.cliente.nif}</p>`)
                        res.write(`<p>Data: ${reparacao.cliente.data}</p>`)
                        res.write(`<p>Matrícula: ${reparacao.viatura}</p>`)
                        res.write(`<p>Número de intervenções: ${reparacao.nr_intervencoes}</p>`)
                        res.write(`<p>Códigos das intervenções realizadas:</p>`)
                        res.write(`<ul>`)
                        reparacao.intervencoes.forEach(intervencao => {
                            res.write(`<li><a href='/intervencoes/${intervencao}'>${intervencao}</a></li>`);
                        });
                        res.write(`</ul>`)
                        res.write(`<h6><a href='../reparacoes'>Voltar</a></h6>`)
                        res.end()
                    }) 
                    .catch(err => {
                        console.log(err)
                        res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' })
                        res.end()
                    })
            }

            else if (req.url == "/reparacoes") {
                axios.get('http://localhost:3000/reparacoes')
                    .then(resp => {
                        var reparacoes = resp.data;
                        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                        res.write("<h1>Lista de Reparações</h1>");
                        res.write("<ul>");
                        reparacoes.forEach(reparacao => {
                            res.write(`<li><a href='/reparacoes/${reparacao.id}'>Reparação ${reparacao.id}</a></li>`);
                        });
                        res.write("</ul>");
                        res.write("<h6><a href='/'>Voltar</a></h6>");
                        res.end();
                    })
                    .catch(err => {
                        console.log(err);
                        res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
                        res.end();
                    });
            }

            else if (req.url.match(/\/intervencoes\/.+/)) {
                var codigo = req.url.split("/")[2];
                axios.get(`http://localhost:3000/intervencoes/${codigo}`)
                    .then(resp => {
                        var intervencao = resp.data;
                        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                        res.write(`<h1>Intervenção: ${intervencao.id}</h1>`);
                        res.write(`<p>Nome: ${intervencao.nome}</p>`);
                        res.write(`<p>Descrição: ${intervencao.descricao}</p>`);
                        res.write("<h6><a href='/intervencoes'>Voltar</a></h6>");
                        res.end();
                    })
                    .catch(err => {
                        console.log(err);
                        res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
                        res.end();
                    });
            }
            

            else if (req.url == "/intervencoes") {
                axios.get('http://localhost:3000/intervencoes')
                    .then(resp => {
                        var intervencoes = resp.data;
                        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                        res.write("<h1>Lista de Intervenções</h1>");
                        res.write("<ul>");
                        intervencoes.forEach(intervencao => {
                            res.write(`<li><a href='/intervencoes/${intervencao.id}'>Intervenção ${intervencao.id}</a></li>`);
                        });
                        res.write("</ul>");
                        res.write("<h6><a href='/'>Voltar</a></h6>");
                        res.end();
                    })
                    .catch(err => {
                        console.log(err);
                        res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
                        res.end();
                    });
            }

            else if (req.url.match(/\/viaturas\/.+/)) {
                var id = req.url.split("/")[2]
                axios.get(`http://localhost:3000/viaturas/${id}`)
                    .then(resp => {
                        var viatura = resp.data
                        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
                        res.write(`<h1>Viatura: ${viatura.id}</h1>`)
                        res.write(`<p>Matrícula: ${viatura.id}</p>`)
                        res.write(`<p>Marca: ${viatura.marca}</p>`)
                        res.write(`<p>Modelo: ${viatura.modelo}</p>`)
                        res.write(`<p>Código de reparações:</p>`)
                        res.write(`<ul>`)
                        viatura.reparacoes.forEach(reparacao => {
                            res.write(`<li><a href='/reparacoes/${reparacao}'>${reparacao}</a></li>`);
                        });
                        res.write(`</ul>`)

                        res.write(`<h6><a href='/viaturas'>Voltar</a></h6>`)
                        res.end()
                    })
                    .catch(err => {
                        console.log(err)
                        res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' })
                        res.end()
                    })
            }

            else if (req.url == "/viaturas") {
                axios.get('http://localhost:3000/viaturas')
                    .then(resp => {
                        var viaturas = resp.data;
                        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                        res.write("<h1>Lista de Viaturas</h1>");
                        res.write("<ul>");
                        viaturas.forEach(viatura => {
                            res.write(`<li><a href='/viaturas/${viatura.id}'>Viatura ${viatura.id}</a></li>`);
                        });
                        res.write("</ul>");
                        res.write("<h6><a href='/'>Voltar</a></h6>");
                        res.end();
                    })
                    .catch(err => {
                        console.log(err);
                        res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
                        res.end();
                    });
            }

            else {
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
                res.end()
            }
            
            break;
        default:
            res.writeHead(405, { 'Content-Type': 'text/html; charset=utf-8' })
            res.end()
            break;
    }
}).listen(1234)

console.log('Servidor à escuta na porta 1234...')