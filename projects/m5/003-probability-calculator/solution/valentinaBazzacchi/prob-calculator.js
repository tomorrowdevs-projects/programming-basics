const lodashClonedeep = require("lodash.clonedeep")

class Hat {
    constructor(...args) {
        this.contents = [];

        args.forEach((arg) => {
            for (const [key, value] of Object.entries(arg)) {
                for (let i = 0; i < value; i++) {
                    this.contents.push(key);
                }
            }
        })

    } // end constructor

    draw(numOfBalls) {
        
        if (numOfBalls > this.contents.length) return this.contents;

        const ballsDrawed = [];
        for (let i = 0; i < numOfBalls; i++) {
            const choice = randomChoice(this.contents);
            ballsDrawed.push(choice);
            const startIndex = this.contents.indexOf(choice);
            this.contents.splice(startIndex, 1);
        }
        return ballsDrawed;
    }
} // end class

/* Each experiment consists of:

* Start with a hat containing the specified balls
* The hat object should be copied before each draw
* Draw a number of balls ("numBallsDrawn") with the "draw" method
* Check if we got the balls we were attempting to draw ("expectedBalls") and count the successes
* The "experiment" function should return a probability (successes / numer of experiments)

*/

function experiment(hat, expectedBalls, numBallsDrawn, numExperiments) {
    
    let successes = 0;
    
    for (let i = 0; i < numExperiments; i++) {
        // const hatCopy = JSON.parse(JSON.stringify(hat)); --> doesn't work for class methods copy
        const hatCopy = lodashClonedeep(hat);
        const ballsDrawed = hatCopy.draw(numBallsDrawn);
        
        let success = true;
        for (const [key, value] of Object.entries(expectedBalls)) {
            if (count(ballsDrawed, key) < value) success = false;
        }
        
        successes += success ? 1 : 0;
    } // end for loop
    
    return successes / numExperiments;
} // end function


// ------------------------  UTILS -------------------------------

// Function to simulate the draw of a random ball from the hat
function randomChoice(list) {
    const randomIndex = Math.floor((Math.random() * list.length));
    return list[randomIndex];
}

// Function to count the number of equal elements contained in a list
function count(arr, item) {
    return arr.filter(value => value === item).length;
}

module.exports = { Hat, experiment }