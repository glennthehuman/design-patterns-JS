const expect = require('chai').expect;
const [Penne, SauceDecorator, CheeseDecorator] = require('../src/structural/decorator/decorator');

/**
 * Decorator pattern allows a user to add new functionality to an existing object without altering its structure. This type of design pattern comes under structural pattern as this pattern acts as a wrapper to existing class.
 * This pattern creates a decorator class which wraps the original class and provides additional functionality keeping class methods signature intact.
 */
describe('decorator tests', () => {

  it('sanity test', () => {
    var penne = new Penne();
    var penneWithSauce = new SauceDecorator(penne);
    var penneWithSauceAndCheese = new CheeseDecorator(penneWithSauce);

    expect(penne.getPrice()).to.equal(8);
    expect(penneWithSauce.getPrice()).to.equal(13);
    expect(penneWithSauceAndCheese.getPrice()).to.equal(16);
  });

});
