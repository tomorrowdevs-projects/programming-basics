/** Class representing a Rectangle */
class Rectangle {
  /**
   * Create a new rectangle
   *
   * @param {number} width
   * @param {number} height
   */
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  /**
   * Set the width of the rectangle
   *
   * @param {number} width
   */
  setWidth(width) {
    this.width = width;
  }

  /**
   * Set the height of the rectangle
   *
   * @param {number} height
   */
  setHeight(height) {
    this.height = height;
  }

  /**
   * Get the area of the rectangle
   *
   * @returns {number}
   */
  getArea() {
    return this.width * this.height;
  }

  /**
   * Get the perimeter of the rectangle
   *
   * @returns {number}
   */
  getPerimeter() {
    return 2 * (this.width + this.height);
  }

  /**
   * Get the diagonal of the rectangle
   *
   * @returns {number}
   */
  getDiagonal() {
    return (this.width ** 2 + this.height ** 2) ** 0.5;
  }

  /**
   * Create a picture of the shape, each unit is represented by a "*"
   *
   * @returns {string}
   */
  getPicture() {
    if (this.width > 50 || this.height > 50) {
      return "Too big for picture.";
    } else {
      const line = new Array(this.width).fill("*").concat("\n").join("");
      const picture = line.repeat(this.height);
      return picture;
    }
  }

  /**
   * Check how many time the entered shape could be contained inside the current shape
   *
   * @param {*} shape
   * @returns
   */
  getAmountInside(shape) {
    return (
      Math.floor(this.width / shape.width) *
      Math.floor(this.height / shape.height)
    );
  }

  /**
   * Print a string containing the main information about the shape: witdh and height
   *
   * @returns {string}
   */
  printString() {
    return `Rectangle(width=${this.width}, height=${this.height})`;
  }
}

/**
 * Class representing a square
 * @extends Rectangle
 */
class Square extends Rectangle {
  /**
   *
   * @param {number} side
   */
  constructor(side) {
    super(side, side);
    this.side = side;
  }

  /**
   * Set width and height equal to side
   */
  init() {
    this.width = this.side;
    this.height = this.side;
  }

  /**
   * Set the side of the square
   *
   * @param {number} side
   */
  setSide(side) {
    this.side = side;
    this.init();
  }

  /**
   * Print a string containing the main information about the shape: side
   *
   * @returns {string}
   */
  printString() {
    return `Square(side=${this.side})`;
  }
}

module.exports = { Rectangle, Square };

const rect = new Rectangle(3, 6);
const sq = new Square(5);
