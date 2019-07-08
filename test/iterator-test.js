const expect = require('chai').expect;

const Iterator = require('../src/behavioral/iterator/iterator');

import Iterator6 from '../src/behavioral/iterator/iterator_es6';

/**
 * This pattern is used to get a way to access the elements of a collection object in sequential manner without any need to know its underlying representation.
 * Iterator pattern falls under behavioral pattern category.
 */
describe('iterator tests', () => {

  it('sanity', () => {
    test(Iterator);
  });

});

describe('iterator es6 tests', () => {

  it('sanity', () => {
    test(Iterator6);
  });

});

function test(Iterator) {
  var numbers = new Iterator([1, 2, 3]);

  expect(numbers.next()).to.equal(1);
  expect(numbers.next()).to.equal(2);
  expect(numbers.next()).to.equal(3);
  expect(numbers.hasNext()).to.false;
}
