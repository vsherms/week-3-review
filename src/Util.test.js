import {expect} from 'chai';
import Util from './Util';

describe("Util", function() {
  it("Can filter out a specific number", function(){
    // Arrange
    let arrayWithoutTwos = [1, 3, 4, 5, 6, 7];
    let expectedResult = arrayWithoutTwos.slice();
    // Act
    let result = Util.removeNumbers(arrayWithoutTwos, 2);
    // Assert
    expect(result).to.eql(expectedResult);
  });
  it("Can filter out a specific number", function(){
    // Arrange
    let arrayWithTwos = [1, 2, 3, 4, 2, 5, 6, 7];

    let expectedResult = [1, 3, 4, 5, 6, 7];
    // Act
    let result = Util.removeNumbers(arrayWithTwos, 2);
    // Assert
    expect(result).to.eql(expectedResult);
  });
  it("Can remove capitalized strings", function(){
    // Arrange
    let arrayWithSomeCaps = ["Hey", "no", "big"];

    let expectedResult = ["no", "big"];
    // Act
    let result = Util.removeCapitalizedStrings(arrayWithSomeCaps);
    // Assert
    expect(result).to.eql(expectedResult);
  });
});
