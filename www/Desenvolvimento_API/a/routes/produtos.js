const express = require('express');
const router = express.Router();
const produtoControllers = require('../controllers/produtoControllers');

router.post('/', produtoControllers.CriarProdutos);
router.get('/', produtoControllers.listarProdutos);
router.put('/', produtoControllers.atualizarProdutos);
router.delete('/', produtoControllers.deletarProdutos);

module.exports = router;