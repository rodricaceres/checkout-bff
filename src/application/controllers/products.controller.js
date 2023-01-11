const db = require('../../infrastructure/services/database/fakeDatabase');
const paginateProducts = require('../helpers/paginateProducts');

/**
 * @type {import('./ExpressHandler').ExpressController}
 */

module.exports = {
  async get(req, res) {
    try {
      const query = { name: req.query.query, currency: req.query.currency };
      const results = await db.select('products', query);

      const slicedProducts = paginateProducts(results, req.query.size);
      const selectedProducts = slicedProducts[req.query.page - 1] || [];

      const response = {
        metadata: {
          page: req.query.page,
          total_records: selectedProducts?.length || 0
        },
        products: selectedProducts
      };

      res.status(200).json(response);
    } catch (err) {
      const response = {
        code: 'INTERNAL_SERVER_ERROR',
        message: err.message
      };

      res.status(500).json(response);
    }
  }
};
