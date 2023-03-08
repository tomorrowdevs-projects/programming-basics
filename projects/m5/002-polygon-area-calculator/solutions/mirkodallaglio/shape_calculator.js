/////////////////////////////////
/////// Rectangle Class /////////
/////////////////////////////////
class Rectangle {
    #name = 'Rectangle';
    #width = 0;
    #height = 0;

    constructor (width, height) {
        this.#width = width;
        this.#height = height;
    };

    set width (size) { if (!isNaN(size) && size > 0) this.#width = size };

    set height (size) { if (!isNaN(size) && size > 0) this.#height = size };

    get width () {return this.#width};

    get height () {return this.#height};

    get_area () { return this.#width * this.#height };

    get_perimeter () { return this.#width * 2 + this.#height * 2 };

    get_diagonal () { return (this.#width ** 2 + this.#height ** 2) ** .5 };

    get_picture () {
        let string = '';

        if (this.#width <= 50 && this.#height <= 50) {
            const line = '*'.padStart(this.#width, '*');
            for (let i=0; i < this.#height; i++) { string += line + '\n' }
        } else string = 'Too big for picture';

        return string
    };

    get_amount_inside (shape) { 
        return Math.floor(this.#width / shape.width) * Math.floor(this.#height / shape.height)
    };

    view () { return `${this.#name}(width=${this.#width}, height=${this.#height})` }

    show_all () { 
        return `${this.view()}
Perimeter=${this.get_perimeter()}
Area=${this.get_area()}
Diagonal=${this.get_diagonal().toFixed(2)}
Picture:
${this.get_picture()}` };

};

/////////////////////////////////
/////// Square subClass /////////
/////////////////////////////////
class Square extends Rectangle {
    #name = 'Square';
    #side = 0;

    constructor (size) {
        super(size, size)
        this.#side = size
    }

    #setSide (size) {
        if (!isNaN(size) && size > 0) {
            super.width = size;
            super.height = size;
            this.#side = size;
        }
    };

    set width (size) { this.#setSide(size) };

    set height (size) { this.#setSide(size) };

    set side (size) { this.#setSide(size) };

    get side () { return this.#side };

    get width () { return super.width };

    get height () { return super.height };

    view () { return `${this.#name}(side=${this.#side})` }
};

module.exports = {Rectangle, Square}