var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('http://localhost:17000/books')
    .then(resp => {
      res.status(200).render('livrosList', {'llist': resp.data});
    })
    .catch(erro => {
      res.status(500).render('error', { 'error': erro });
    })
});

router.get('/:id', function(req, res, next) {
  var date = new Date().toISOString().substring(0, 16);
  axios.get('http://localhost:17000/books/' + req.params.id)
  .then(resp => {
    res.status(200).render('livroList', {title : 'Book ' + req.params.id, 'book': resp.data});
  })
  .catch(erro => {
    res.status(500).render('error', { 'error': erro });
  })
});

router.get('/entidades/:id', function(req, res, next) {
  axios.get('http://localhost:17000/books?author=' + req.params.id)   
    .then(resp => {
      res.status(200).render('author', {books: resp.data, idAutor: req.params.id});
    })
    .catch(erro => {
      res.status(500).render('error', { error: erro });
    });
});


module.exports = router;
