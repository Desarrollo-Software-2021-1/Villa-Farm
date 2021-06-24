const express = require('express');
const router = express.Router();

const { list , create} = require('../../controllers/commentController/commentController')

router.get('/listcomment', list);
router.post('/comment', create);

module.exports= router;