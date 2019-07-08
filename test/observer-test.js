const expect = require('chai').expect;
const [Product, fees, proft] = require('../src/behavioral/observer/observer.js');

function register(p, f, t) {
  p.register(f);
  p.register(t);
  return p;
}

/**
 * Observer pattern is used when there is one-to-many relationship between objects such as if one object is modified, its depenedent objects are to be notified automatically. Observer pattern falls under behavioral pattern category.
 */
describe('Observer test', () => {

  it('Subscribers are triggered', () => {
    let product = register(new Product(), fees, proft);
    product.setBasePrice(100);
    expect(product.price).to.equal(240);
  });

  it('We are able to unregister a subscriber', () => {
    let product = register(new Product(), fees, proft);
    product.unregister(proft);

    product.setBasePrice(100);
    expect(product.price).to.equal(120)
  })

});
