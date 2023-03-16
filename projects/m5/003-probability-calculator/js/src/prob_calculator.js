// @ts-check
/**
 * @fileoverview Create a Probability Calculator.
 * @author Salvatore Quagliariello
 * @module prob_calculator
 */

/**
 * @classdesc A Class to create Hat Objects.
 */
class Hat {
    /**
     * Accept an undefined number of strings that will be converted into object
     * with color as key and number as value. The objects will then be pushed
     * into the `contents` Array.
     * @constructor
     * @param  {...string} balls A string describing a color the number of balls (e.g blue=2).
     */
    constructor(...balls) {
        /** @private @constant {Array<Object>} */
       this.contents = [];

       balls.forEach(item => { 
        const color = item.split(`=`)[0];
        const numberOfBalls = parseInt(item.split(`=`)[1]);

            for (let i = 0; i < numberOfBalls; i++) {
                this.contents.push(color);
            };
       });
    }

    /**
     * Takes a number as argument. The method mimin a draw from an Hat Object.
     * The draw is completely random as it is based on Fisher-Yates algorithm.
     * It shuffle the `contents` Array of the Object and pick the first entries,
     * to push it to another Array, and delete it from the `contents` Array.
     * If the Number used as argument is greater than the Array size, the 
     * nethod returns the whole array.
     * @param {number} numberOfBalls The number of balls to draw from the Hat Object.
     * @returns {Array<string>}
     */
    draw(numberOfBalls) {
        const balls = [...this.contents];
        const pickedBalls = [];

        if(numberOfBalls >= this.contents.length) {
            this.contents = [];
            return balls;
        };

        for (let k = 0; k < numberOfBalls; k++) {
            for (let i = balls.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              const temp = balls[i];
              balls[i] = balls[j];
              balls[j] = temp;
            };
            this.contents.splice(this.contents.indexOf(balls[0]), 1);
            balls.splice(0, 1);
            pickedBalls.push(balls[0]);
        };
        return pickedBalls;
    }
};

/**
 * A function that perform an N number of draws on the applied Object, to determine 
 * the percentage that a given draw occurs. It uses a for loop and a utility function,
 * to perform on an Object.
 * If the number of balls or their color are not in the Hat Object, the function will
 * return an error message.
 * @function experiment
 * @param {Object} hatObj The Hat Object on which the function will be appplied.
 * @param {Object} expectedBallsObj The Object in which are contained the expected balls.
 * @param {Number} numberOfDraws The number of balls to draw in every experiment.
 * @param {Number} numberOfExperiments The number of experiment to perform.
 * @returns {Number|String} The probability of the given draw, or an error message.
 */
function experiment(hatObj, expectedBallsObj, numberOfDraws, numberOfExperiments) {
    const expectedBalls = Object.keys(expectedBallsObj).map((key) => (Array(expectedBallsObj[key]).fill(key))).flat();
    const hatBalls = hatObj.contents;

    if (!arrayChecker(hatBalls, expectedBalls)) return `Experiment is not possible!`;

    let matchesCounter = 0; 
    for (let i = 0; i < numberOfExperiments; i++) {
        const hatCopy = Object.assign({}, hatObj);
        const drawnBalls = hatObj.draw(numberOfDraws);
        const checker = (arr, target) => target.every(v => arr.includes(v))

        if(checker(drawnBalls, expectedBalls)) matchesCounter += 1;
    };
    const probabilty = +((matchesCounter / numberOfExperiments) * 100).toFixed(3);
    return probabilty;
};

/**
 * An helper function created to check if a given array contains all element of another array.
 * @param {Array} parentArray 
 * @param {Array} childArray 
 * @returns {Boolean} True, if the length of the child Array is equal to the counter.
 */
function arrayChecker(parentArray, childArray) {
    const parentArrayCopy = [...parentArray];
    let counter = 0;

    childArray.forEach(member => {
        if (parentArrayCopy.includes(member)) {
            parentArrayCopy.splice(parentArrayCopy.indexOf(member), 1);
            counter ++;
        } else {
            return;
        };
    });

    if (counter === childArray.length) return true;
    else return false;
};

module.exports = {Hat, experiment};
