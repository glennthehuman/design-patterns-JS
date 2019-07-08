const expect = require('chai').expect;
const RequestBuilder = require('../src/creational/builder/builder');

/**
 * Builder pattern builds a complex object using simple objects and using a step by step approach. This type of design pattern comes under creational pattern as this pattern provides one of the best ways to create an object.
 * A Builder class builds the final object step by step. This builder is independent of other objects.
 */
describe('builder test', () => {
  it('sanity', () => {
    var requestBuilder = new RequestBuilder();
    var request = requestBuilder
      .forUrl('http://something/users')
      .useMethod('GET')
      .payload(null)
      .build();

    expect(request.method).to.equal('GET');
  });
});
