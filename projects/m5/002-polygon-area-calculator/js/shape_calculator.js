class Rectangle {
  #name = "Rectangle";

  constructor(width, height) {
    if (width < 0 || height < 0) {
      console.log(
        "Error!: The input must be a positive number\nthe height and width value has been set to 0"
      );
      this._width = 0;
      this._height = 0;
    } else {
      this._width = width;
      this._height = height;
    }
  }

  getWidth() {
    return this._width;
  }

  setWidth(value) {
    if (value < 0) {
      console.log(
        `Error!: The input must be a positive number\nthe width has been set to the previous value (${this._width})`
      );
      value = this._width;
    }
    this._width = value;
  }

  getHeight() {
    return this._height;
  }

  setHeight(value) {
    if (value < 0) {
      console.log(
        `Error!: The input must be a positive number\nthe height has been set to the previous value (${this._height})`
      );
      value = this._height;
    }
    this._height = value;
  }

  getArea() {
    return this._width * this._height;
  }

  getPerimeter() {
    return 2 * this._width + 2 * this._height;
  }

  getDiagonal() {
    return Math.pow(Math.pow(this._width, 2) + Math.pow(this._height, 2), 0.5);
  }

  checkSide(side) {
    return side > 50 ? true : false;
  }

  getPicture() {
    if (this.checkSide(this._width) || this.checkSide(this._height)) {
      return "Too big for picture.";
    }

    let picture = "";

    for (let y = 0; y < this._height; y++) {
      for (let x = 0; x < this._width; x++) {
        picture += "*";
      }
      picture += "\n";
    }
    return picture;
  }

  getString() {
    return `${this.#name}(width=${this._width}, height=${this._height})`;
  }

  getAmountInside(shape) {
    return shape.getArea() > this.getArea()
      ? 0
      : Math.floor(this.getArea() / shape.getArea());
  }
}

//Class Square
class Square extends Rectangle {
  #name = "Square";

  constructor(side) {
    super(side, side);
  }

  setSide(value) {
    if (value < 0) {
      console.log(
        `Error!: The Input must be a positive number\nwidth and height have been set to their previous values (${this._width})`
      );
      value = this._width;
    }
    this._width = value;
    this._height = value;
  }

  getString() {
    return `${this.#name}(side=${this._width})`;
  }
}

module.exports = {Rectangle, Square};