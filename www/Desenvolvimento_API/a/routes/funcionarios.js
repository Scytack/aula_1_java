const express = require('express');
const router = express.Router();
const funcionariosControllers = require('../controllers/funcionariosControllers');

router.post('/', funcionariosControllers.CriarFuncionarios);
router.get('/', funcionariosControllers.listarFuncionario);
router.put('/', funcionariosControllers.atualizarFuncionarios);
router.delete('/', funcionariosControllers.deletarFuncionarios);

module.exports = router;