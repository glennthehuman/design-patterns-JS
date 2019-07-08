const expect = require('chai').expect;
const droidProducer = require('../src/creational/abstract-factory/abstract-factory');
import droidProducer6 from '../src/creational/abstract-factory/abstract-factory_es6';

/**
 * Abstract Factory patterns work around a super-factory which creates other factories. This factory is also called as factory of factories. This type of design pattern comes under creational pattern as this pattern provides one of the best ways to create an object.
 * In Abstract Factory pattern an interface is responsible for creating a factory of related objects without explicitly specifying their classes. Each generated factory can give the objects as per the Factory pattern.
 */
describe('abstract factory test', () => {
  it('Battle droid', () => {
    const battleDroid = droidProducer('battle')();
    expect(battleDroid.info()).to.equal('B1, Battle Droid');
  });

  it('pilot droid', () => {
    const pilotDroid = droidProducer('pilot')();
    expect(pilotDroid.info()).to.equal('Rx24, Pilot Droid');
  });

  it('Battle droid es6', () => {
    const battleDroid = droidProducer6('battle')();
    expect(battleDroid.info()).to.equal('B1, Battle Droid');
  });

  it('pilot droid 6', () => {
    const pilotDroid = droidProducer6('pilot')();
    expect(pilotDroid.info()).to.equal('Rx24, Pilot Droid');
  });

});
