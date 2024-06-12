//m5-003-probability-calculator
class Hat {
    constructor(...contents) {
        this.contents = contents //contens is a list of parameters converted in array list
        this.contentList = this.#getColorsContentsList() //list of string with colors name
        //this.contentObj
    }

    /**
     * transform the content in an object
     * @returns {object} example {"red": 2, "blue": 1}
     */
    #getObjContents(){
        const objContents = {}
        this.contents.forEach((element) => {
            objContents[element.match(/^\w+/)] = +element.match(/\d+/)[0];
        });
        return objContents
    }
    /**
     * transform the obj created before in a list
     * @returns {list of string} example ["red", "red", "blue"]
     */
    #getColorsContentsList(){
        const listContents = []
        const objContents = this.#getObjContents()
        Object.keys(objContents).forEach(color => {
            for (let i=0;i<objContents[color];i++){
                listContents.push(color)
            }
        })
        return listContents
    }    

    /**
     * function to draw a numbers of balls out of the total list of balls
     * @param {number} numbersOfBalls 
     * @returns {list of string} total list or draw balls list
     */
    draw(numbersOfBalls){
        let drawList = []
        const list = Array.from(this.contentList)

        if (numbersOfBalls<=list.length){
            for(let r=0; r<numbersOfBalls; r++){
                const randomNumber = Math.floor(Math.random() * list.length)
                const randomColor = list.splice(randomNumber,1)
                drawList.push(randomColor)
            }
            
            this.contentList = Array.from(list)
            return drawList.flat()
        } return this.contentList
    }
}

/**
 * function to calculate the probability
 * @param {object} hat A hat object containing balls that should be copied inside the function.
 * @param {object} expectedBalls An object indicating the exact group of balls to attempt to draw from the hat for the experiment. ex: expectedBalls = {"blue":2, "red":1}.
 * @param {number} numBallsDraws The number of balls to draw out of the hat in each experiment.
 * @param {number} numExperiments  The number of experiments to perform. (The more experiments performed, the more accurate the approximate probability will be.)
 * @param {probability number} return
 */
const experiment = (hat, expectedBalls, numBallsDraws, numExperiments) => {

    //const expectedBallsList = (new HatObject(expectedBalls)).contentList
    let drawBalls = []
    let countProbability = 0
    let probability = 0
    
    /**
     * function to transform an array to an object and counting its iteration
     * @param {list of string} arr it will be a list of colors 
     * @returns {object} ex: {"blue":2, "red":1}
     */
    const getArrayToObject = arr => {
        return arr.reduce((obj, item) => {
            if (!obj[item]) {
                obj[item] = 0;
            }
            obj[item]++;
            return obj;
        }, {});
    }

    /**
     * find if the obj1 is contained in obj2
     * @param {object} obj1 = expected
     * @param {object} obj2 = draw
     * @returns {boolean}
     */
    let checker = (obj1,obj2) =>  {
        let result = Object.keys(obj1).every((key) => obj1[key] <= obj2[key]) 
        return result
    }
    
    /**
     * "for cicle" to repeat the draw n times
     * count the number of times the drawsBalls contains the expectedBallsList
     */
    for (n=0;n<numExperiments;n++){
        /**
         * drawBalls will be = to hat.contentList or drawsList depending on the quantity of ball inside the hat
         * and the quantiy drwed
         * @returns {list of string}
         */
        drawBalls = Array.from(hat.draw(numBallsDraws))
        drawObj = getArrayToObject(drawBalls)

        /**
         * This "if" check if drawBalls is returned by draws or hat.contentList
         * if it draws I the length are different and I need to put back in the hat
         * the draws balls
         */        
        if(drawBalls.length != hat.contentList.length){
            //when the balls are checked we need to put them back in the hat for the new draw
            hatContentListComplete = hat.contentList.concat(drawBalls)
            hat.contentList = Array.from(hatContentListComplete) 
        }   
        if (checker(expectedBalls,drawObj)){countProbability ++} //check the two obj
      
    }
    probability = countProbability/numExperiments
    return probability
}

module.exports =  {Hat, experiment};
