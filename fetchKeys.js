import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://babel-in.xyz/babel-b2ef9ad8f0d432962d47009b24dee465/tata/channels');
    const data = response.data;
    const channels = data.channels || {};
    const keys = {};

    for (const channelId in channels) {
      const channel = channels[channelId];
      if (channel.key) {
        keys[channelId] = channel.key;
      }
    }

    res.status(200).json(keys);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching keys' });
  }
}
