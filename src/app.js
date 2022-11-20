const { products } = require('./database');
const express = require('express');
const productsRouter = require('./Products/Routes');

const app = express();
app.use(express.json());

app.use('/products', productsRouter);

app.listen(3333, () => {
  console.log('App running in port 3333');
});

app.get('/', function (req, res) {
  res.status(200).json('API Fullstack Job Test - DomPixel running');
});

// PUT "/products/:productId" Será responsável por receber atualizações de um produto especifico enviados pelo frontend

// DELETE "/products/:productId" Remover o produto da base de dados
