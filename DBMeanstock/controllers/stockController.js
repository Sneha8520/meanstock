// controllers/stockController.js
const stockService = require('../services/stockService');


exports.createStock = async (req, res) => {
    try {
        const stock = await stockService.createStock(req.body);
        res.status(200).json(stock);
    } catch (error) {
        res.status(400).json({ message: 'Error creating stock', error });
    }
};

exports.getAllStocks = async (req, res) => {
    try {
        const stocks = await stockService.getAllStocks();
        res.json(stocks);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving stocks', error });
    }
};

exports.getStockById = async (req, res) => {
    try {
        const stock = await stockService.getStockById(req.params.id);
        if (!stock) {
            return res.status(404).json({ message: 'Stock not found' });
        }
        res.json(stock);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving stock', error });
    }
};

exports.updateStock = async (req, res) => {
    try {
        const updatedStock = await stockService.updateStock(req.params.id, req.body);
        if (!updatedStock) {
            return res.status(404).json({ message: 'Stock not found' });
        }
        res.json(updatedStock);
    } catch (error) {
        console.error('Error during updateStock:', error); // Log the error for debugging
        res.status(400).json({ message: 'Validation failed', error: error.message });
    }
};



exports.deleteStock = async (req, res) => {
    try {
        await stockService.deleteStock(req.params.id);
        res.json({ message: 'Stock deleted' });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting stock', error });
    }
};
