const expect = require('chai').expect;

const [TrafficTower, Airplane] = require('../src/behavioral/mediator/mediator');

/**
 * Mediator pattern is used to reduce communication complexity between multiple objects or classes. This pattern provides a mediator class which normally handles all the communications between different classes and supports easy maintenance of the code by loose coupling. Mediator pattern falls under behavioral pattern category.
 */
describe('mediator tests', () => {

  it('sanity', () => {
    test(TrafficTower, Airplane);
  });

});

function test(TrafficTower, AirPlane) {
  var trafficTower = new TrafficTower();
  var boeing1 = new Airplane(10, trafficTower);
  var boeing2 = new Airplane(15, trafficTower);
  var boeing3 = new Airplane(55, trafficTower);

  expect(boeing1.requestPositions()).to.deep.equals([10, 15, 55]);
}
