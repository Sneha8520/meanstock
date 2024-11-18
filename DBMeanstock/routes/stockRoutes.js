// routes/stockRoutes.js
const express = require('express');
const stockController = require('../controllers/stockController');

const router = express.Router();

router.post('/stocks', stockController.createStock);
router.get('/stocks', stockController.getAllStocks);
router.get('/stocks/:id', stockController.getStockById); 
router.put('/stocks/:id', stockController.updateStock);
router.delete('/stocks/:id', stockController.deleteStock);

// Define other routes for update, delete, and fetch by ID as needed
module.exports = router;
