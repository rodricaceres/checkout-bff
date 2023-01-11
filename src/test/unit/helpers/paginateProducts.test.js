const chai = require('chai');
const { expect } = chai;
const paginateProducts = require('../../../application/helpers/paginateProducts');

describe('Test paginate products function', () => {
  it('Should split the product array correctly.', () => {
    const products = [
      {
        id: 1,
        name: 'Vaso',
        image: '',
        price: 10,
        currency: 'USD',
        quantity: 5
      },
      {
        id: 1,
        name: 'Libro',
        image: '',
        price: 10,
        currency: 'EUR',
        quantity: 5
      },
      {
        id: 1,
        name: 'Libro',
        image: '',
        price: 10,
        currency: 'EUR',
        quantity: 5
      }
    ];

    const expected = [
      [
        {
          id: 1,
          name: 'Vaso',
          image: '',
          price: 10,
          currency: 'USD',
          quantity: 5
        },
        {
          id: 1,
          name: 'Libro',
          image: '',
          price: 10,
          currency: 'EUR',
          quantity: 5
        }
      ],
      [
        {
          id: 1,
          name: 'Libro',
          image: '',
          price: 10,
          currency: 'EUR',
          quantity: 5
        }
      ]
    ];

    const response = paginateProducts(products, 2);
    expect(response).to.deep.equal(expected);
  });
});
