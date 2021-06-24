const express = require('express');
const router = express.Router();

const { list , create} = require('../../controllers/followController/followController')

router.get('/listfollow', list);
router.post('/follow', create);

module.exports= router;