const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

// Function to fetch keys for a specific channel
const fetchKeysForChannel = async (channelId) => {
  try {
    const response = await axios.get(`https://babel-in.xyz/babel-b2ef9ad8f0d432962d47009b24dee465/tata/channels/${channelId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching keys for channel ${channelId}`);
  }
};

// Endpoint to fetch keys for all channels
app.get('/keys', async (req, res) => {
  const channelIds = ['channel1', 'channel2', 'channel3']; // Replace with your actual channel IDs
  const keys = {};

  try {
    for (const channelId of channelIds) {
      const data = await fetchKeysForChannel(channelId);
      keys[channelId] = data.channel_key;
    }
    res.json(keys);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
