const express = require('express')
const router = express.Router();

const {create, list} = require('../controllers/usuarioController');

router.get('/usuarios', list);
router.post('/create', create)

module.exports = router