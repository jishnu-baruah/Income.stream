const express = require('express');
const mongoose = require('mongoose');
const Web3 = require('web3');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Web3 setup
const web3 = new Web3(new Web3.providers.HttpProvider(`https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`));

app.use(express.json());

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
