const { products } = require('./database');
const express = require('express');
const productsRouter = require('./Products/Routes');
const cors = require('cors');

const app = express();

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
