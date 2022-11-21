require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const productsRouter = require('./Routes');
const connectToDatabase = require('./database');

connectToDatabase();

app.use(
  cors({
    origin: '*',
  })
);

app.use(express.json());

app.use('/products', productsRouter);

app.get('/', function (req, res) {
  res.status(200).json('API Fullstack Job Test - DomPixel running');
});

app.listen(3333, () => {
  console.log('App running in port 3333');
});
