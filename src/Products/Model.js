const { v4: uuid } = require('uuid');
const { products } = require('../database');

class Model {
  static getAll() {
    return products;
  }

  static findById(productId) {
    const product = products.find((product_) => product_.id == productId);

    return product;
  }

  static create({ name, category, price }) {
    const newProduct = {
      name,
      category,
      price,
      createdAt: new Date().toISOString(),
      id: uuid().substring(0, 4),
    };

    products.push(newProduct);
    return newProduct;
  }
}

module.exports = Model;
