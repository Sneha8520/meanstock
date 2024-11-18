// services/stockService.js
const Stock = require('../models/stockModel');

// Create a new stock entry
const createStock = async (data) => {
    const stock = new Stock(data);
    return await stock.save();
};

// Get all stock entries
const getAllStocks = async () => {
    return await Stock.find();
};
// Get a stock entry by ID
const getStockById = async (id) => {
    return await Stock.findById(id);
};


const updateStock = async (id, data) => {
    try {
        return await Stock.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    } catch (error) {
        console.error('Error in updateStock:', error);
        throw error;
    }
};



// Delete a stock entry by ID
const deleteStock = async (id) => {
    return await Stock.findByIdAndDelete(id);
};

module.exports = {
    createStock,
    getAllStocks,
    getStockById,
    updateStock,
    deleteStock
};
