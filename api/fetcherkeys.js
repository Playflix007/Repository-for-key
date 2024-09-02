// /api/fetchkey.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const response = await fetch('https://babel-in.xyz/babel-b2ef9ad8f0d432962d47009b24dee465/tata/channels');
    const data = await response.json();
    
    if (data && data.channel_key && data.channel_key.keys) {
      res.status(200).json(data.channel_key.keys);
    } else {
      res.status(404).json({ message: 'No keys found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching keys', error });
  }
}
