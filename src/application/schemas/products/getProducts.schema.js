const Joi = require('joi');

module.exports = Joi.object({
  page: Joi.number().required(),
  size: Joi.number().default(10).max(20),
  query: Joi.string().uppercase().allow('').default(''),
  currency: Joi.string().uppercase().valid('ARS', 'USD', 'EUR').required()
}).required();
