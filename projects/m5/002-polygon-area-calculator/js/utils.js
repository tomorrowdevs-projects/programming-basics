//m5-002-polygon-area-calculator

class Rectangle {
    constructor(width, height){

        if (this.#validateInputNegativeN(width,height) === false) {
            throw new Error(`the input number cannot be negative`)
        }

        //arguments
        this.width = +width 
        this.height = +height 
    }        
        //methods
        #validateInputNegativeN(width, height){ //#private method
            if(width<0 || height<0){return false}
            return true
        }
        #validateInputLess50(num){
            if (num>50){return false}
            return true
        }

        setWidth(width){this.width = width}
        setHeight(height){this.height = height}

        getArea(){return this.width*this.height}
        getPerimeter(){return this.width * 2 + this.height * 2}
        getDiagonal(){return Math.pow((Math.pow(this.width,2) + Math.pow(this.height,2)),0.5)}
        getPicture(){
            let picture = ''

            if (this.#validateInputLess50(this.width) === false || this.#validateInputLess50(this.height) === false) {
                return 'Too big for picture.'
            }else {
                for(let row=0;row<this.height;row++){
                    for(let col=0;col<this.width;col++){
                        picture += '*'
                    }
                    picture += '\n'
                }
                return picture
            }
        }    

        toString(){return `Rectangle(width=${this.width}, height=${this.height})`}

        getAmountInside(classFigure){
            return Math.floor(this.width/classFigure.width)*Math.floor(this.height/classFigure.height)
        }
}
class Square extends Rectangle{
    constructor(side){
        super(side, side) 
    }
    setSide(side){return (this.width = side, this.height = side)} 
    toString(){return `Square(side=${this.width})`}
}


module.exports = {Rectangle, Square}