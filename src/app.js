const { products } = require('./database');
const { v4: uuid } = require('uuid');
const express = require('express');
const productsRouter = require('./Products/Routes');

const app = express();
app.use(express.json());

app.use('/products', productsRouter);

app.listen(3333, () => {
  console.log('App running in port 3333');
});

// GET "/" Retornar um Status: 200 e uma Mensagem "API Fullstack Job Test - DomPixel running"
app.get('/', function (req, res) {
  res.status(200).json('API Fullstack Job Test - DomPixel running');
});

// GET "/products" Listar todos os produtos da base de dados
app.get('/products', function (req, res) {
  res.json({ products });
});

// GET "/products/:productId" Obter a informação somente de um produto da base de dados
app.get('/find/:id', function (req, res) {
  const { id } = req.params;

  const product = products.find((product) => product.id == id);

  if (!product) return res.status(404).json({ notFound: true });

  return res.json(product);
});

// POST "/products" Inserir novos dados na tabela de produtos que serão enviados pelo frontend, que serão: nome, categoria e preço
app.post('/product', (req, res) => {
  const { name, category, price } = req.body;

  if (!name) res.status(400).json({ error: "Field 'name' is required" });

  products.push({
    name,
    price,
    category,
    id: uuid().substring(0, 5),
    createdAt: new Date().toISOString(),
  });

  res.json({ status: 'ok' });
});

// PUT "/products/:productId" Será responsável por receber atualizações de um produto especifico enviados pelo frontend

// DELETE "/products/:productId" Remover o produto da base de dados
