const express = require('express');
const mongoose = require('mongoose');
const stockRoutes = require('../routes/stockRoutes');  
const cors = require('cors');  // Import the CORS package
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(bodyParser.json()); // Enable JSON parsing

app.use(express.json());



// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/stockProject');
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};
connectDB();
// Enable CORS for all routes
app.use(cors());

app.use('/api', stockRoutes);  

app.get('/', (req, res) => {
    res.send('Hello, the server is running!');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
