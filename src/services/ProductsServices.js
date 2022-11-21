const { v4: uuid } = require('uuid');

class ProductsServices {
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

  static delete(productId) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == productId) {
        products.splice(i, 1);
        break;
      }
    }
  }

  static update(productId, { name, category, price }) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == productId) {
        products[i].name = name || products[i].name;
        products[i].category = category || products[i].category;
        products[i].price = price || products[i].price;
        return products[i];
      }
    }
    throw new Error('Product not found');
  }
}

module.exports = ProductsServices;
