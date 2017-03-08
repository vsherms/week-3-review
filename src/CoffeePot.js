class CoffeePot{
  constructor(capacity) {
    this.capacity = capacity;
    this.coffeeLeft = 0;
  }
  fill(cups){
    if(this.coffeeLeft + cups > this.capacity){
      this.coffeeLeft = this.capacity;
      throw new Error();
    }
    else{
      this.coffeeLeft += cups;
    }
  }
  pour(cups){
    if(cups <= this.coffeeLeft){
      this.coffeeLeft -= cups;
      return cups;
    }
    else{
      let amount = this.coffeeLeft;
      this.coffeeLeft -= this.coffeeLeft;
      return amount;
    }
  }
}


export default CoffeePot;
