import {expect} from 'chai';
import Toaster from './Toaster';
import Appliance from './Appliance';
import Bread from './Bread';


describe("Toaster", function(){
  it("is an Appliance", function(){
    //arrange
    let toaster = new Toaster();
    //act
    //assertion
    expect(toaster).to.be.instanceof(Appliance);
  });
  it("makes nothing with no power or bread", function(){
    //arrange
    let toaster = new Toaster();
    //act
    let action = toaster.do();

    //assertion
    expect(action).to.eql(undefined);
  });
  it("it returns bread with no power", function(){
    //arrange
    let newtoaster = new Toaster();
    let sliceOfWholeWheat = new Bread("bread");
    //act
    let action = newtoaster.do(sliceOfWholeWheat, "");
    //assertion
    expect(action).to.eql("bread");
  });
  it("it returns toast with bread and power", function(){
    //arrange
    let lasttoaster = new Toaster();
    let sliceOfWholeWheat = new Bread("bread");
    //act
    let action = lasttoaster.do(sliceOfWholeWheat, "power");
    //assertion
    expect(action).to.eql("toast");
  });
  it("it returns toasted bread", function(){
    //arrange
    let toaster = new Toaster();
    let sliceOfWholeWheat = new Bread("bread");
    //act
    toaster.do(sliceOfWholeWheat, "power");
    //assertion
    expect(sliceOfWholeWheat.isToasted).to.be.true;
  });
});
