var express = require('express');
var router = express.Router();
var Livro = require('../controllers/livro')

/* GET all books. */
router.get('/', function(req, res, next) {
  if(req.query.character){
    Livro.getLivrosByCharacter(req.query.character)
      .then(data => res.status(200).jsonp(data))
      .catch(error => res.status(500).jsonp(error))
  }else if(req.query.genre){
    Livro.getLivrosByGenre(req.query.genre)
      .then(data => res.status(200).jsonp(data))
      .catch(error => res.status(500).jsonp(error))
  }else if(req.query.author){
    Livro.getLivrosByAuthor(req.query.author)
      .then(data => res.status(200).jsonp(data))
      .catch(error => res.status(500).jsonp(error))
  }else{
    Livro.getLivros()
      .then(data => res.status(200).jsonp(data))
      .catch(error => res.status(500).jsonp(error))
  }
});

/* GET genres by alphabetic order. */
router.get('/genres', function(req, res, next) {
  Livro.getGenres()
  .then(data => res.status(200).jsonp(data))
  .catch(error => res.status(500).jsonp(error))
});


/* GET characters by alphabetic order. */
router.get('/characters', function(req, res, next) {
  Livro.getCharacters()
  .then(data => res.status(200).jsonp(data))
  .catch(error => res.status(500).jsonp(error))
});

/* GET books by Id. */
router.get('/:id', function(req, res, next) {
  Livro.getLivrosById(req.params.id)
  .then(data => res.status(200).jsonp(data))
  .catch(error => res.status(500).jsonp(error))
});

/* POST inserir novo livro. */
router.post('/', function(req, res, next) {
  Livro.insert(req.body)
    .then(data => res.status(200).jsonp(data))
    .catch(error => res.status(500).jsonp(error))
});

/* PUT atualizar info livro. */
router.put('/:id', function(req, res, next) {
  Livro.update(req.body, req.params.id)
    .then(data => res.status(200).jsonp(data))
    .catch(error => res.status(500).jsonp(error))
});

/* DELETE livro. */
router.delete('/:id', function(req, res, next) {
  Livro.delete(req.params.id)
    .then(data => res.status(200).jsonp(data))
    .catch(error => res.status(500).jsonp(error))
});

module.exports = router;
