const expect = require('chai').expect;

const [Tax1, Tax2] = require('../src/behavioral/template/template');

/**
 * In Template pattern, an abstract class exposes defined way(s)/template(s) to execute its methods. Its subclasses can override the method implementation as per need but the invocation is to be in the same way as defined by an abstract class. This pattern comes under behavior pattern category.
 */
describe('template tests', () => {

  it('sanity', () => {
    var tax1 = new Tax1();
    var tax2 = new Tax2();

    expect(tax1.calc(1000)).to.equal(1110);
    expect(tax2.calc(1000)).to.equal(1210);
    expect(tax2.calc(100)).to.equal(110);
  });

});
