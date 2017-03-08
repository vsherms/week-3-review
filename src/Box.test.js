import {expect} from 'chai';
import Box from './Box';

describe("Box", function() {
  it("Can create a box with dimentions and name", function(){
    // Arrange
    let box1 = new Box(3, 4, 5, "box1")
    // Act
    // Assert
    expect(box1.width).to.eql(3);
    expect(box1.height).to.eql(4);
    expect(box1.depth).to.eql(5);
    expect(box1.name).to.eql("box1");
  });
  it("Can calculate volume of a box", function(){
    // Arrange
    let box1 = new Box(3, 4, 5, "box1");
    // Act
    // Assert
    expect(box1.volume()).to.eql(60);
  });
  it("Can compare volume of another box", function(){
    // Arrange
    let box1 = new Box(3, 4, 5, "box1");
    let box2 = new Box(4, 5, 6, "box2");

    // Act
    // Assert
    expect(box1.compare(box2)).to.eql(false);
  });
});
