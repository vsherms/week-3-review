import CoffeeMaker from './CoffeeMaker';
import CoffeePot from './CoffeePot';
import Appliance from './Appliance';
import {expect} from 'chai';

describe("CoffeeMaker", function() {
  it("is an Appliance", function() {
    //Arrange
    let pot = new CoffeePot(4);
    let maker = new CoffeeMaker(pot);
    expect(maker).to.be.instanceof(Appliance);
  });
  it("makes no coffee without water and power", function() {
    //Arrange
    let pot = new CoffeePot(4);
    let maker = new CoffeeMaker(pot);
    maker.do();
    expect(pot.coffeeLeft).to.eql(0);
  });
  it("brews coffee into coffee pot with water and power", function() {
    //Arrange
    let pot = new CoffeePot(4);
    let maker = new CoffeeMaker(pot);
    maker.do("power", 4);
    expect(pot.coffeeLeft).to.eql(4);
  });
});
