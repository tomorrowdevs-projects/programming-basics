// @ts-check
/**
 * @fileoverview Create a Polygon Class.
 * @author Salvatore Quagliariello
 */


/**
 * @class Rectangle
 * @classdesc A Class to create Rectangle Objects.
 */
class Rectangle {
    /** @member {number} */
    #width;
    /** @member {number} */
    #height;
    /**
     * @param {number} width - The width of the Rectangle Object.
     * @param {number} height - The height of the Rectangle Object.
     */
    constructor(width, height) {
        /** @private @property {number} */
        this.#width = width;
        /** @private @property {number} */
        this.#height = height;
    }

    /** 
     * @readonly
     * @type {number} 
     */
    get width() {
        return this.#width;
    }

    /** 
     * @readonly
     * @type {number} 
     */
    get height() {
        return this.#height;
    }

    /**
     * Set the value of the width of the Rectangle Object. 
     * @param {number} value 
     */
    set_width(value) {
        this.#width = value;
    }

    /**
     * Set the value of the height of the Rectangle Object. 
     * @param {number} value 
     */
    set_height(value) {
        this.#height = value;
    }

    /**
     * Returns the area of the Rectangle Object.
     * @returns {number} area
     */
    get_area() {
        return this.#width * this.#height;
    }

    /**
     * Returns the perimeter of the Rectangle Object.
     * @returns {number} perimeter
     */
    get_perimeter() {
        return ((2 * this.#width) + (2 * this.#height));
    }

    /**
     * Returns the diagonal of the Rectangle Object.
     * @returns {number} diagonal
     */
    get_diagonal() {
        return Math.sqrt((this.#width ** 2) + (this.#height ** 2));
    }

    /**
     * Check if the `height` or the `width` of the Rectangle object are greater than 50.
     * If so returns an error message. Otherwise returns a visual representation of the Object.
     * @returns {string} A visual representation of the Object made out of `#` characters.
     */
    get_picture() {
        if (this.#height > 50 || this.#width > 50) return "Too big for picture."

        const ast = `*`;
        let outputString = ``;

        for (let i = 0; i < this.#height; i++) {
            for (let k = 0; k < this.#width; k++) {
                outputString += ast;
            };
            outputString += `\n`;
        };

        return outputString;
    }

    /**
     * Takes another shape (square or rectangle) as an argument. Returns the number of times the 
     * passed in shape could fit inside the shape (with no rotations).
     * @param {Object} shape Another Shape Object (Rectangle or Square).
     * @returns {number}
     */
    get_amount_inside(shape) {
        const shapeArea = shape.get_area();
        const amountOfTimes = this.get_area() / shapeArea;
        return Math.floor(amountOfTimes);
    }

    /**
     * Create a short description for the Object.
     * @returns {string} A string containing its dimensions.
     */
    print() {
        return `${this.constructor.name}(width=${this.#width}, height=${this.#height})`;
    }
};

/**
 * A Class to create a Square Object.
 * @class Square
 * @extends Rectangle
 * @classdesc Create a Square Object.
 */
class Square extends Rectangle {
    /** @member {number} */
    #side;
    /**
     * @param {number} side The side of the Square Object.
     */
    constructor(side) {
        super(side, side);
        /**
         * @property {number} side
         */
        this.#side = (side);
    }

    /**
     * Set the side (the height and the width) of the Square Object.
     * @param {number} value 
     */
    set_side(value) {
        super.set_height(value);
        super.set_width(value);
        this.#side = value;
    }

    /**
     * Set the width (the side and the height) of the Square Object.
     * @param {number} value 
     * @override
     */
    set_width(value) {
        super.set_height(value);
        super.set_width(value);
        this.#side = value;
    }

    /**
     * Set the height (the side and the width) of the Square Object.
     * @param {number} value 
     * @override
     */
    set_height(value) {
        super.set_height(value);
        super.set_width(value);
        this.#side = value;
    }

    /**
     * Create a short description for the Object.
     * @returns {string} A string containing its dimensions.
     * @override
     */
    print() {
        return `${this.constructor.name}(side=${this.#side})`;
    }
}

module.exports = {Rectangle, Square};
