const express = require('express');
const router = express.Router();

const { list , create} = require('../../controllers/likeController/likeController')

router.get('/listlike', list);
router.post('/like', create);

module.exports= router;