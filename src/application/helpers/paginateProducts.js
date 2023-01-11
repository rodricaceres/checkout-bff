module.exports = function paginateProducts(products, size) {
  const pages = [];

  for (let i = 0; i < products.length; i += size) {
    const page = products.slice(i, i + size);
    pages.push(page);
  }

  return pages;
};
