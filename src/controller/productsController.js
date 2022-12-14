const Products = require('../schemas/Products');
const { v4: uuid } = require('uuid');

class Controller {
  static async index(req, res) {
    try {
      const products = await Products.find();

      return res.json(products);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  static async find(req, res) {
    const { productId } = req.params;

    const product = await Products.findById(productId);

    if (!product) return res.status(404).json({ error: 'Produto not found' });

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

    try {
      const newProduct = await Products.create({
        _id: uuid().substring(0, 4),
        name,
        category,
        price,
        createdAt: new Date().toISOString(),
      });

      return res.status(201).json(newProduct);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  static async delete(req, res) {
    try {
      const { productId } = req.params;

      await Products.findByIdAndRemove(productId);

      return res.json({ message: 'Produto Deletado.' });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  static async update(req, res) {
    try {
      const { productId } = req.params;
      const { name, category, price } = req.body;

      if (!name && !category && !price)
        return res
          .status(400)
          .json({ error: 'You must inform at least one new data' });

      const newProduct = await Products.findByIdAndUpdate(
        productId,
        {
          name: name,
          category: category,
          price: price,
        },
        { returnDocument: 'after' }
      );

      return res.status(200).json(newProduct);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
}

module.exports = Controller;
