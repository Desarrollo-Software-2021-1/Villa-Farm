const express = require('express');
const router = express.Router();

const { signup,signin, list } = require('../../controllers/authController/authController')

router.post('/signup',signup);
router.post('/signin',signin);
router.get('/list',list)

module.exports = router;
