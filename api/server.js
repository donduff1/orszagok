//Decker Borisz, SzoftII/2N 2024.03.13

const express = require('express');
const orszagok = require('./orszagok.json');

const PORT = process.env.PORT || 3000;

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  


app.get('/orszagok', (req, res) => {
  res.json(orszagok);
});

app.get('/orszagok/:id', (req, res) => {
  const { id } = req.params;
  const orszagok = orszagok.find(country => country.id === parseInt(id));
  if (!country) {
    res.status(404).json({ error: 'Country not found' });
  } else {
    res.json(country);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
