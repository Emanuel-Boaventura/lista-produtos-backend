const Model = require('./Model');

class Controller {
  static async index(req, res) {
    const products = await Model.getAll();
    return res.json(products);
  }
}

module.exports = Controller;
