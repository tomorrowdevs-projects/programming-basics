class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width
  }
  setWidth(width) {
    this.width = width
  }
  setHeigth(height) {
    this.height = height
  }
  getArea() {
    return this.width * this.height
  }  
  getPerimeter() {
    return 2 * this.width + 2 * this.height
  }   
  getDiagonal() {
    return (this.width ** 2 + this.height ** 2) ** 0.5
  }
  getPicture(height = this.height - 1, width = this.width) {
    if (height >= 50 || width > 50) return "too big";
    let print = "";
    //create line based on width
    if (width > 0) {
      print = "*" + this.getPicture(0, width - 1)
    }
    //repeat line based on height
    if (height > 0) {
      print += `\n` + this.getPicture(height - 1, width) 
    }
    return print
  }
  getAmountInside(shape) {  //calculate how many times the shape fits in Width, calculate how many times the shape fits in height, multiply two results
    return Math.floor(this.width / shape.width) * Math.floor(this.height / shape.height)
  }
}

class Square extends Rectangle {
  constructor (side) {
    super(side, side);
    this.side = side
  } 
  setSide(side) {
    this.side = side;
    this.width = side;
    this.height = side;
  }
  setWidth(side) {
    this.setSide(side)
  }
  setHeigth(side) {
    this.setSide(side)
  }
}