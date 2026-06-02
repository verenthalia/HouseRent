const Stock = require('../models/Stock');

const createStock = async (req, res) => {
    try {

        const stock = await Stock.create(req.body);

        res.status(201).json(stock);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    createStock
};