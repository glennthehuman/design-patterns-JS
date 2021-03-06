const expect = require('chai').expect;

const [ShoppingCart, guestStrategy, regularStrategy, premiumStrategy] = require('../src/behavioral/strategy/strategy.js');

/**
 * In Strategy pattern, a class behavior or its algorithm can be changed at run time. This type of design pattern comes under behavior pattern.
 * In Strategy pattern, we create objects which represent various strategies and a context object whose behavior varies as per its strategy object. The strategy object changes the executing algorithm of the context object.
 */
describe('strategy tests', () => {

  it('guest test', () => {
    var guestCart = new ShoppingCart(guestStrategy);
    guestCart.setAmount(100);
    expect(guestCart.checkout()).to.equal(100);
  });

  it('regular test', () => {
    var regularCart = new ShoppingCart(regularStrategy);
    regularCart.setAmount(100);
    expect(regularCart.checkout()).to.equal(90);
  });

  it('premium test', () => {
    var premiumCart = new ShoppingCart(premiumStrategy);
    premiumCart.setAmount(100);
    expect(premiumCart.checkout()).to.equal(80);
  });
});
