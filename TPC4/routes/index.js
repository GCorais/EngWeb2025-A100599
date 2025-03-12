var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', 
    { title: 'Engenharia Web 2025',
      docente: 'jcr',
      instituicao: 'DI-UM'
     });
});

router.get('/filmes', function(req, res) {
  axios.get('http://localhost:3000/filmes')
    .then(resp => {
      res.status(200).render('filmes', {lfilmes: resp.data, tit: "Lista de Filmes"})
    })
    .catch(erro => {
      console.log(erro)
      res.render('error', {'error' : erro})
    });
});

router.get('/filmes/edit/:id', function(req, res) {
  var id = req.params.id;
  axios.get(`http://localhost:3000/filmes/${id}`)
    .then(resp => {
      res.status(200).render('filmFormEditPage', {filme: resp.data, title: `Editar Filme ID: ${id}`})
    })
    .catch(erro => {
      console.log(erro)
      res.status(500).render("error", {'error' : erro})
    });
});

router.post('/filmes/edit/:id', function(req, res) {
  var id = req.params.id
  axios.put("http://localhost:3000/filmes/" + id, req.body)
      .then(resp => {
        res.redirect('/filmes')
        console.log(`Filme ${id} alterado com sucesso`)
      })
      .catch(erro => {
        console.log(erro)
        res.render('error', {'error': erro})
      })

})

router.get('/filmes/delete/:id', function(req, res) {
  var id = req.params.id

  axios.delete(`http://localhost:3000/filmes/${id}`)
    .then(resp => {
      console.log(`Filme ${id} removido com sucesso.`)
      res.redirect('/filmes')
    })
    .catch(erro => {
      console.log(erro)
      res.render('error', {'error': erro})
    })
})

router.get('/actor/:d', function(req, res) {
  var filmes = [];
  axios.get("http://localhost:3000/filmes")
    .then(resp => {
      for (let i = 0; i < resp.data.length; i++) {
        if (resp.data[i].cast.includes(req.params.d)) {
          filmes.push(resp.data[i].title);
        }
      }    
      res.render("actorPage", { lfilmes: filmes, title : "Lista de Filmes de " + req.params.d});
    })
    .catch(erro => {
      res.status(500);
      res.render("error", { 'error': erro });
    });
});


module.exports = router;
