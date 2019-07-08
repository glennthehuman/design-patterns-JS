const expect = require('chai').expect;

const [Num, Min, Sum] = require('../src/behavioral/interpreter/interpreter');

/**
 * Interpreter pattern provides a way to evaluate language grammar or expression. This type of pattern comes under behavioral pattern. This pattern involves implementing an expression interface which tells to interpret a particular context. This pattern is used in SQL parsing, symbol processing engine etc.
 */
describe('interpreter tests', () => {

  it('sanity', () => {
    var result = new Sum(new Num(100), new Min(new Num(100), new Num(50)));
    expect(result.interpret()).to.equal(150);
  });
});
