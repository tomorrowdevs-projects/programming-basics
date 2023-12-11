
class Polygon {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    get width() {
        return this._width
    }
    set width(value) {
        this._width = value
    }


    get height() {
        return this._height
    }
    set height(value) {
        this._height = value
    }

    getArea() {
        return this.width * this.height
    }

    getPerimeter() {
        return (this.width * 2) + (this.height * 2)
    }

    getDiagonal() {
        return parseFloat(((this.width ** 2 + this.height ** 2) ** .5).toFixed(2))
    }

    getPicture() {
        let line = ""
        const char = "*"
        if ((this.width >= 50) || (this.height >= 50)) {
            return `Too big for picture`
        } else {
            for (let i = 0; i < this.height; i++) {
                line += char.repeat(this.width) + "\n"
            }
            return line
        }
    }

    getAmountInside(obj){
        const area = this.getArea()
        const areaObj = obj.getArea()

        return Math.floor(area / areaObj)
    }
    toString(){
        return `Rectangle (Width = ${this.width}, Height = ${this.height})`
    }
}

class Square extends Polygon{
    constructor(side){
        super(side, side)
        this.side = side
    }

    get side() {
        return this._side
    }

    set side(value){
        this._side = value
        this.width = value;
        this.height = value;
    }
    toString(){
        return `Square (Side = ${this.side})`
    }
}


// const rettangolo = new Polygon()
// rettangolo.width = 10
// rettangolo.height = 20
// console.log(rettangolo.getDiagonal())
// const quadrato = new Square()
// quadrato.side = 9

module.exports = {
    Polygon,
    Square
}