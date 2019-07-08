const expect = require('chai').expect;

const [Cockpit, Turbine, OnCommand, OffCommand, SpeedUpCommand, SpeedDownCommand] = require('../src/behavioral/command/command.js');

/**
 * As the name suggests, the chain of responsibility pattern creates a chain of receiver objects for a request. This pattern decouples sender and receiver of a request based on type of request. This pattern comes under behavioral patterns.
 * In this pattern, normally each receiver contains reference to another receiver. If one object cannot handle the request then it passes the same to the next receiver and so on.
 */
describe('command tests', () => {

  it('turn off/on test', () => {
    var turbine = new Turbine();
    const onCommand = new OnCommand(turbine);
    const cockpit = new Cockpit(onCommand);
    cockpit.execute();
    expect(turbine.state).to.be.true;
  });

  it('speed test', () => {
    var turbine = new Turbine();
    const onCommand = new OnCommand(turbine);
    var cockpit = new Cockpit(onCommand);
    cockpit.execute();

    const speedUp = new SpeedUpCommand(turbine);
    cockpit = new Cockpit(speedUp);
    cockpit.execute();

    expect(turbine.speed).to.equal(200);
  });
});
