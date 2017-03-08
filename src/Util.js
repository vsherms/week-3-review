var Util = {
  removeNumbers(arr, num) {
    return arr.filter(x => x !== num);
  },


  removeCapitalizedStrings(arr) {
    return arr.filter(function(x){
      if(x === x.toLowerCase()){
        return x;
      }
    });
  }
};


export default Util;
