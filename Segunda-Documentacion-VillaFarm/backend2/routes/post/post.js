const express = require('express');
const router = express.Router();

const { list , create} = require('../../controllers/postController/postController')

router.get('/posts', list);
router.post('/createpost', create);

module.exports= router;