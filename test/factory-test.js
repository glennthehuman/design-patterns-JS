const expect = require('chai').expect;
const bmwFactory = require('../src/creational/factory/factory');

/**
 * This type of design pattern comes under creational pattern as this pattern provides one of the best ways to create an object.
 * In Factory pattern, we create object without exposing the creation logic to the client and refer to newly created object using a common interface.
 */
describe('factory test', () => {
  it('sanity', () => {
    var x5 = bmwFactory('X5');
    var x6 = bmwFactory('X6');

    expect(x5.price).to.equal(108000);
    expect(x6.price).to.equal(111000);
    expect(x5.maxSpeed).to.equal(300);
    expect(x6.maxSpeed).to.equal(320);
  });
});
