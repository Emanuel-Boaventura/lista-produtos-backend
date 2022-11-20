const ProductsServices = require('../services/ProductsServices');

class Controller {
  static async index(req, res) {
    const products = await ProductsServices.getAll();
    return res.json(products);
  }

  static async find(req, res) {
    const { productId } = req.params;

    const product = await ProductsServices.findById(productId);

    if (!product) return res.status(404).json({ error: 'Lasco' });

    return res.json(product);
  }

  static async store(req, res) {
    const { name, category, price } = req.body;

    if (!name)
      return res.status(400).json({ error: "Field 'name' is required" });
    if (!category)
      return res.status(400).json({ error: "Field 'category' is required" });
    if (!price)
      return res.status(400).json({ error: "Field 'price' is required" });

    const newProduct = await ProductsServices.create({ name, category, price });

    return res.json(newProduct);
  }

  static async delete(req, res) {
    const { productId } = req.params;

    await ProductsServices.delete(productId);

    return res.json({ message: 'Produto Deletado.' });
  }

  static async update(req, res) {
    try {
      const { productId } = req.params;
      const { name, category, price } = req.body;

      const newProduct = await ProductsServices.update(productId, {
        name,
        category,
        price,
      });
      return res.json(newProduct);
    } catch (e) {
      return res.status(404).json({ error: e.message });
    }
  }
}

module.exports = Controller;
