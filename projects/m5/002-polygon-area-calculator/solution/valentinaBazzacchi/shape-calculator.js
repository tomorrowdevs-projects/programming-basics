class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    // Getters and Setters for width and height parameters
    get width() {
        return this._width;
    }

    set width(newWidth) {
        this._width = newWidth;
    }

    get height() {
        return this._height;
    }

    set height(newHeight) {
        this._height = newHeight;
    }
    
    // Class Methods
    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * this.width + 2 * this.height;
    }

    getDiagonal() {
        return (this.width ** 2 + this.height ** 2) ** 0.5;
    }

    getPicture() {
        if (this.width > 50 || this.height > 50) return "Too big for picture.";

        let picture = "";

        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                picture += "*";
            }
            picture += "\n";
        }
        return picture;
    }

    getAmountInside(shape) {
        return (shape.width > this.width || shape.height > this.height) ? 0 : Math.floor(this.getArea() / shape.getArea());
    }

    string() {
        return `Rectangle(width=${this.width}, height=${this.height})`;
    }

} // end class Rectangle

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }

    get side() {
        return newSide;
    }

    set side(newSide) {
        this.height = newSide;
        this.width = newSide;
    }

    string() {
        return `Square(side=${this.width})`;
    }
} // end subclass Square

module.exports = { Rectangle, Square };