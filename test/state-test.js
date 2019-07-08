const expect = require('chai').expect;

const Order = require('../src/behavioral/state/state');

/**
 * In State pattern a class behavior changes based on its state. This type of design pattern comes under behavior pattern.
 * In State pattern, we create objects which represent various states and a context object whose behavior varies as its state object changes.
 */
describe('state tests', () => {

  it('sanity', () => {
    var order = new Order();
    expect(order.state.name).to.equal('waitingForPayment');
    order.nextState();
    expect(order.state.name).to.equal('shipping');
    order.nextState();
    expect(order.state.name).to.equal('delivered');
  });

});
