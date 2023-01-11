const products = require('./products.json');

const tables = { products };

async function select(table, query) {
  const keys = Object.keys(query);

  //* Se filtran los registros de la base que cumplan con la consulta realizada
  return tables[table].filter((record) =>
    keys.every((keys) => record[keys].toUpperCase().includes(query[keys]))
  );
}

module.exports = { select };
