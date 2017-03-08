import CoffeePot from "./CoffeePot";
import Appliance from "./Appliance";
import {expect} from "chai";

describe("CoffeePot", function() {
  it("takes a cups capacity when constructed", function(){
    //Arrange
    //Act
    let pot = new CoffeePot(7);
    // Assert
    expect(pot.capacity).to.eql(7);
  });
  it("Is not an appliance", function() {
    let pot = new CoffeePot(4);
    expect(pot).to.not.be.instanceof(Appliance);
  });
  it("starts out empty", function() {
    //Arrange
    let pot = new CoffeePot(5);
    //Act
    let myCup = pot.pour(3);
    //Assert
    expect(myCup).to.eql(0);
  });
  it("can be filled with less than capacity", function() {
    let pot = new CoffeePot(4);
    function fillMyPot() {
      pot.fill(2);
    }
    expect(fillMyPot).to.not.throw(Error);
    expect(pot.coffeeLeft).to.eql(2);
  });
  it("can fill my cup when it has enough", function() {
    //Arrange
    let pot = new CoffeePot(5);
    pot.fill(5);
    //Act
    let myCup = pot.pour(3);
    //Assert
    expect(myCup).to.eql(3);
    expect(pot.coffeeLeft).to.eql(2);
  });

  it("can empty cup when it doesn't have enough", function() {
    //Arrange
    let pot = new CoffeePot(5);
    pot.fill(5);
    //Act
    let myCup = pot.pour(7);
    //Assert
    expect(myCup).to.eql(5);
    expect(pot.coffeeLeft).to.eql(0);
  });
  it("can't be filled with more than capacity", function() {
    let pot = new CoffeePot(10);
    function fillMyPot() {
      pot.fill(20);
    }
    expect(fillMyPot).to.throw(Error);
    expect(pot.coffeeLeft).to.eql(10);

  });
  
});
