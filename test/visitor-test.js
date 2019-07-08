const expect = require('chai').expect;

const [Developer, Manager, bonusVisitor] = require('../src/behavioral/visitor/visitor.js');

/**
 * In Visitor pattern, we use a visitor class which changes the executing algorithm of an element class. By this way, execution algorithm of element can vary as and when visitor varies. This pattern comes under behavior pattern category. As per the pattern, element object has to accept the visitor object so that visitor object handles the operation on the element object.
 */
describe('visitor tests', () => {
  it('sanity', () => {
    var employees = [];

    var john = new Developer(4000);
    var maria = new Developer(4000);
    var christian = new Manager(10000);

    employees.push(john);
    employees.push(maria);
    employees.push(christian);

    employees.forEach(e => {
      e.accept(bonusVisitor);
    });

    expect(john.bonus).to.equal(4000);
    expect(christian.bonus).to.equal(20000);
  });
});
