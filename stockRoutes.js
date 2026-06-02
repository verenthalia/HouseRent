const express = require('express');

const {
    createStock
} = require('../controllers/stockController');

const router = express.Router();

router.post('/', createStock);

module.exports = router;