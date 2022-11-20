const { products } = require('./database');
const express = require('express');
const productsRouter = require('./Routes');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect(
  'mongodb+srv://emanuel:Mongo3016@cluster0.ven2mji.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to Database!'));

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
