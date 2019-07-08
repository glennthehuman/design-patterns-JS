const expect = require('chai').expect;

const colorFactory = require('../src/structural/flyweight/flyweight');

/**
 * Flyweight pattern is primarily used to reduce the number of objects created and to decrease memory footprint and increase performance. This type of design pattern comes under structural pattern as this pattern provides ways to decrease object count thus improving the object structure of application.
 * Flyweight pattern tries to reuse already existing similar kind objects by storing them and creates new object when no matching object is found.
 */
describe('flyweight tests', () => {

  it('sanity', () => {
    colorFactory.create('RED');
    colorFactory.create('RED');
    colorFactory.create('RED');
    colorFactory.create('YELLOW');
    colorFactory.create('YELLOW');
    expect(Object.keys(colorFactory.colors)).to.have.lengthOf(2);
  });

});
