import {expect} from 'chai';
import Appliance from './Appliance';

describe("Appliance", function(){
  it("does something", function(){
    //arrange
    let appl = new Appliance();
    //act
    let action = appl.do();
    //assertion
    expect(action).to.be.ok;
  });
});
