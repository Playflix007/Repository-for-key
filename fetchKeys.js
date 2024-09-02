const axios = require('axios');

const API_URL = 'https://babel-in.xyz/babel-b2ef9ad8f0d432962d47009b24dee465/tata/channels';

module.exports = async (req, res) => 
  const { query } = req;
  const channelId = query.channel;

  if (!channelId) {
    return res.status(400).json({ error: 'Channel ID is required' });
  }

  try {
    const response = await axios.get(`${API_URL}/channels/${channelId}/keys`);
    const data = response.data;

    // Format the response to match your required structure
    const channelKeys = {
      channel_key: {
        keys: data.keys,
        type: data.type
      }
    };

    res.status(200).json(channelKeys);
  } catch (error) {
    console.error('Error fetching keys:', error);
    res.status(500).json({ error: 'Error fetching keys' });
  }
};
