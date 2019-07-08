const expect = require('chai').expect;

const [EquipmentComposition, FloppyDisk, HardDrive, Memory] = require('../src/structural/composite/composite.js');

/**
 * Composite pattern is used where we need to treat a group of objects in similar way as a single object. Composite pattern composes objects in term of a tree structure to represent part as well as whole hierarchy. This type of design pattern comes under structural pattern as this pattern creates a tree structure of group of objects.
 * This pattern creates a class that contains group of its own objects. This class provides ways to modify its group of same objects.
 */
describe('composity tests', () => {

  it('sanity test', () => {
    var cabinet = new EquipmentComposition("cabinet");
    cabinet.add(new FloppyDisk());
    cabinet.add(new HardDrive());
    cabinet.add(new Memory());

    expect(cabinet.getPrice()).to.equal(600);
  });
});
