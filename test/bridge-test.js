const expect = require('chai').expect;

const [EpsonPrinter, HPprinter, acrylicInk, alcoholInk] = require('../src/structural/bridge/bridge');

/**
 * Bridge is used when we need to decouple an abstraction from its implementation so that the two can vary independently. This type of design pattern comes under structural pattern as this pattern decouples implementation class and abstract class by providing a bridge structure between them.
 * This pattern involves an interface which acts as a bridge which makes the functionality of concrete classes independent from interface implementer classes. Both types of classes can be altered structurally without affecting each other.
 */
describe('bridge tests', () => {

  it('Epson test', () => {
    const printer = new EpsonPrinter(alcoholInk);
    const result = printer.print();
    expect(result).to.equal("Printer: Epson, Ink: alcohol-based");
  });

  it('HP test', () => {
    const printer = new HPprinter(acrylicInk);
    const result = printer.print();
    expect(result).to.equal("Printer: HP, Ink: acrylic-based");
  });
});
