import Appliance from './Appliance';


class CoffeeMaker extends Appliance{
  constructor(pot){
    super();
    this.pot = pot;
    this.amount = 0;
  }
  addWater(water){
    if(this.pot.capacity >= water){
      this.amount = water;
    }
  }
  do(power, amount){
    this.addWater(amount);
    if(power && this.amount > 0){
      this.pot.fill(this.amount);
    }
  }
}



export default CoffeeMaker;
