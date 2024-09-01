const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8080;
const Item = require('./models');

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Conectado a MongoDB');
});

app.use(express.json());

app.get('/api/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.post('/api/items', async (req, res) => {
  const { name, price } = req.body;
  const item = new Item({ name, price });
  await item.save();
  res.status(201).json(item);
});

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
