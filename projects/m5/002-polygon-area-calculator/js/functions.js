class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set_width(width) {
        this.width = width;
    }

    set_height(height) {
        this.height = height;
    }

    get_area() {
        return this.width * this.height;
    }

    get_perimeter() {
        return 2 * this.width + 2 * this.height;
    }

    get_diagonal() {
        return Math.sqrt(this.width ** 2 + this.height ** 2);
    }

    get_picture() {
        if (this.width > 50 || this.height > 50) return "Too big for picture.";
        return ('*' .repeat(this.width) + '\n').repeat(this.height);
    }

    get_amount_inside(shape) {
        const areaThis = this.get_area();
        const areaShape = shape.get_area();
        return Math.floor(areaThis / areaShape);
    }

    toString() {
        return `Rectangle(width=${this.width}, height=${this.height})`;
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }

    set_side(side) {
        this.set_width(side);
        this.set_height(side);
    }

    set_width(width) {
        this.width = width;
        this.height = width;
    }

    set_height(height) {
        this.width = height;
        this.height = height;
    }

    toString() {
        return `Square(side=${this.width})`;
    }
}

module.exports = {
    Rectangle,
    Square
};
