const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

const API_URL = 'https://babel-in.xyz/babel-b2ef9ad8f0d432962d47009b24dee465/tata/channels';

app.get('/keys', async (req, res) => {
    try {
        const response = await axios.get(API_URL);
        const keys = response.data; // Adjust based on the API response structure
        res.json(keys);
    } catch (error) {
        console.error('Error fetching keys:', error);
        res.status(500).send('Error fetching keys');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
