const expect = require('chai').expect;

const [ShoppingCart, Discount] = require('../src/behavioral/chain-of-resp/chain-of-resp');

/**
 * As the name suggests, the chain of responsibility pattern creates a chain of receiver objects for a request. This pattern decouples sender and receiver of a request based on type of request. This pattern comes under behavioral patterns.
 * In this pattern, normally each receiver contains reference to another receiver. If one object cannot handle the request then it passes the same to the next receiver and so on.
 */
describe('chain of resp tests', () => {

  it(' > $ 500', () => {
    var discount = new Discount();

    var sc = new ShoppingCart();
    sc.addProduct(1000);

    var resp = discount.calc(sc.products);

    expect(resp).to.equal(0.1);
  });

  it('more than 3 products', () => {
    var discount = new Discount();

    var sc = new ShoppingCart();
    sc.addProduct(100);
    sc.addProduct(100);
    sc.addProduct(100);
    sc.addProduct(100);

    var resp = discount.calc(sc.products);

    expect(resp).to.equal(0.05);
  });

  it('more than 3 products and > $ 500 ', () => {
    var discount = new Discount();

    var sc = new ShoppingCart();
    sc.addProduct(1000);
    sc.addProduct(100);
    sc.addProduct(100);
    sc.addProduct(100);

    var resp = discount.calc(sc.products);

    expect(resp.toFixed(2)).to.equal('0.15');
  });
});
