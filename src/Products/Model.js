const { products } = require('../database');

class Model {
  static getAll() {
    return products;
  }
}

module.exports = Model;
