module.exports = (schema, type = 'body') => {
  return async (req, res, next) => {
    try {
      const data = await schema.validateAsync(req[type]);
      req[type] = data;

      next();
    } catch (error) {
      res.status(400).json({
        code: 'BAD_REQUEST',
        message: 'No acceptable request representation was found',
        details: error.message.split('"').join('')
      });
    }
  };
};
