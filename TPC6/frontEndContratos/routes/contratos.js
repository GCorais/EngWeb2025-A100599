var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  var date = new Date().toISOString().substring(0, 16);
  axios.get('http://localhost:16000/contratos')
  .then(resp => {
    res.status(200).render('contratosList', {'clist': resp.data, 'date': date});
  })
  .catch(erro => {
    res.status(500).render('error', { 'error': erro });
  })
});

router.get('/entidades/:id', function(req, res, next) {
  var date = new Date().toISOString().substring(0, 16);

  axios.get('http://localhost:16000/contratos')
  .then(resp => {
    let contratos = resp.data.filter(contrato => contrato.NIPC_entidade_comunicante === req.params.id);


    let totalPreco = contratos.reduce((acc, contrato) => acc + (contrato.precoContratual || 0), 0);

    res.status(200).render('entidade', {
      title: 'Entidade ' + req.params.id, 
      nipc: req.params.id, 
      entidade: contratos[0].entidade_comunicante, 
      clist: contratos, 
      sum: totalPreco, 
      date: date
    });
  })
  .catch(erro => {
    res.status(500).render('error', { error: erro.message });
  });
});


router.get('/:id', function(req, res, next) {
  var date = new Date().toISOString().substring(0, 16);
  axios.get('http://localhost:16000/contratos/' + req.params.id)
  .then(resp => {
    res.status(200).render('contratoList', {title : 'Contrato ' + req.params.id, 'contrato': resp.data, 'date': date});
  })
  .catch(erro => {
    res.status(500).render('error', { 'error': erro });
  })
});

module.exports = router;
