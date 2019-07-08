const expect = require('chai').expect;

const [Soldier, Jedi, JediAdapter] = require('../src/structural/adapter/adapter.js');

/**
 * Adapter pattern works as a bridge between two incompatible interfaces. This type of design pattern comes under structural pattern as this pattern combines the capability of two independent interfaces.
 * This pattern involves a single class which is responsible to join functionalities of independent or incompatible interfaces. A real life example could be a case of card reader which acts as an adapter between memory card and a laptop. You plugin the memory card into card reader and card reader into the laptop so that memory card can be read via laptop.
 */
describe('adapter tests', () => {

  it('sanity', () => {
    var stormtrooper = new Soldier(1);
    var yoda = new JediAdapter(new Jedi(10));
    expect(yoda.attack()).to.equal(stormtrooper.attack() * 1000);
  });

});
