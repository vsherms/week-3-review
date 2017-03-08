import Appliance from './Appliance';

class Toaster extends Appliance{

  constructor(){
    super();
  }
  do(b, p){
    if(!b && !p){
      return undefined;
    }
    if(b.bread == "bread" && !p){
      return "bread";
    }
    if(b.bread == "bread" && p == "power"){
      b.isToasted = true;
      return "toast";
    }
  }
}









export default Toaster;
