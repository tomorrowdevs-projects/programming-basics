const util = require("util");

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    // formats the object when it is printed
    [util.inspect.custom]() {
    return `${this.constructor.name}(width=${this.width}, height=${this.height})`;
    }
    set_width(width) {
        this.width = width;
    }
    set_height(height) {
        this.height = height;
    }
    get_area() { return (this.width * this.height) }
    get_perimeter() { return (2 * this.width + 2 * this.height) }
    get_diagonal() { return((this.width ** 2 + this.height ** 2) ** .5) }
    get_picture() {
        let picture = "";
        for (let i = 0; i < this.height; i++) {
            for (let y = 0; y < this.width; y++) {
                picture += " * "
            }
            picture += '\n';
        };
        return picture;
    }
    get_amount_inside(anotherShape) {
        // if the height or width of the other figure is greater then this, return 0
        if (anotherShape.height > this.height || anotherShape.width > this.width) {
            return 0;
        }
        return (Math.round(this.height / anotherShape.height) * Math.round(this.width / anotherShape.width));
    }
}
class Square extends Rectangle {
    constructor(side) {
        super(side, side)
    }
    [util.inspect.custom]() {
        return `${this.constructor.name}(side=${this.height})`;
        }
    set_side(side) {
        this.set_height(side);
        this.set_width(side)
    }
}

rect = new Rectangle(10, 5)
console.log(rect.get_area())
rect.set_height(3)
console.log(rect.get_perimeter())
console.log(rect)
console.log(rect.get_picture())

sq = new Square(9)
console.log(sq.get_area())
sq.set_side(4)
console.log(sq.get_diagonal())
console.log(sq)
console.log(sq.get_picture())

rect.set_height(8)
rect.set_width(16)
console.log(rect.get_amount_inside(sq))
