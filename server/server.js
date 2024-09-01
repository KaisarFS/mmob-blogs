import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const port = 3005;

app.use(cors());

app.get('/api/games', async (req, res) => {
  try {
    const response = await axios.get('https://www.mmobomb.com/api1/games?platform=pc');
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Proxy server running on http://localhost:${port}`);
});
