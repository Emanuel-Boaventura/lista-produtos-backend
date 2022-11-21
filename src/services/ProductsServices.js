class ProductsServices {
  static findById(productId) {
    const product = products.find((product_) => product_.id == productId);

    return product;
  }

  static delete(productId) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == productId) {
        products.splice(i, 1);
        break;
      }
    }
  }
}

module.exports = ProductsServices;
