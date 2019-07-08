const expect = require('chai').expect;
const Person = require('../src/creational/singleton/singleton');

/**
 * This type of design pattern comes under creational pattern as this pattern provides one of the best ways to create an object.
 * This pattern involves a single class which is responsible to create an object while making sure that only single object gets created. This class provides a way to access its only object which can be accessed directly without need to instantiate the object of the class.
 */
describe('singleton test', () => {
  it('sanity', () => {
    var john = new Person();
    var john2 = new Person();

    expect(john).to.equal(john2);
  });
});
