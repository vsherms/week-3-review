class Box {
  constructor (width, height, depth, name){
    this.width = width;
    this.height = height;
    this.depth = depth;
    this.name = name;
  }
  volume(){
    return this.width * this.height * this.depth;
  }
  compare(anotherBox){
    return this.volume() > anotherBox.volume;
  }
}


export default Box;
