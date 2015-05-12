// require('../yourfilename.js')

describe("Decimal Converter", function() {

  it("returns a number", function() {
  	isNumber = !isNaN(decimalConverter.convert(100))
    expect(isNumber).toEqual(true);
  });

  it("converts 0 to binary", function() {
  	testOutput = decimalConverter.convert(0)
    expect(testOutput).toEqual(0);
  });

  it("converts 1 to binary", function() {
  	testOutput = decimalConverter.convert(1)
    expect(testOutput).toEqual(1);
  });

  it("converts 2 to binary", function() {
  	testOutput = decimalConverter.convert(2)
    expect(testOutput).toEqual(10);
  });

  it("converts 3 to binary", function() {
  	testOutput = decimalConverter.convert(3)
    expect(testOutput).toEqual(11);
  });

  it("converts 9 to binary", function() {
  	testOutput = decimalConverter.convert(9)
    expect(testOutput).toEqual(1001);
  });

  it("converts 10 to binary", function() {
  	testOutput = decimalConverter.convert(10)
    expect(testOutput).toEqual(1010);
  });

  it("converts 400 to binary", function() {
  	testOutput = decimalConverter.convert(400)
    expect(testOutput).toEqual(110010000);
  });

//what other test cases can we write?
//what about negative numbers as input?
//what about non-numbers as input?

});