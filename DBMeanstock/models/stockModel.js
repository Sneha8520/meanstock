// models/stockModel.js
const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    employeeName: { type: String, required: true },
    technology: { type: String, required: true },
    experience: { type: String, required: true },
    attitude: { type: Number, required: true },
    communciation: { type: Number, required: true },
    goal: { type: String, required: true },
    skill: { type: Number, required: true },
    feedback: { type: String, required: true },
});


module.exports = mongoose.model('Stock', stockSchema);
