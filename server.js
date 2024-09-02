const express = require('express');
const axios = require('axios'); // For making HTTP requests
const app = express();
const port = process.env.PORT || 3000;

const API_URL = 'https://babel-in.xyz/babel-b2ef9ad8f0d432962d47009b24dee465/tata/channels'; // Your API URL

// Route for license keys
app.get('/keys', async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    const keys = response.data; // Adjust this based on the actual API response structure

    // Extract key ID and key value
    const formattedKeys = keys.map(item => ({
      keyId: item.kid,
      keyValue: item.k
    }));

    res.json(formattedKeys);
  } catch (error) {
    console.error('Error fetching keys:', error);
    res.status(500).send('Error fetching keys');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
