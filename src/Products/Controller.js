const Model = require('./Model');

class Controller {
  static async index(req, res) {
    const products = await Model.getAll();
    return res.json(products);
  }

  static async find(req, res) {
    const { productId } = req.params;

    const product = await Model.findById(productId);

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

    const newProduct = await Model.create({ name, category, price });

    return res.json(newProduct);
  }

  static async delete(req, res) {
    const { productId } = req.params;

    await Model.delete(productId);

    return res.json({ message: 'Produto Deletado.' });
  }
}

module.exports = Controller;
