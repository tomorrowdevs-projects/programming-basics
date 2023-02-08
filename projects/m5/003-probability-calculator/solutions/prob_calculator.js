const randomNumber = function (min, max) {
    return Math.trunc(Math.random() * max) + min;
};
class Hat {
    constructor(...balls) {
        this.balls = [];
        this._createListOfBalls(balls);
    }
    // private method, formats the constructor input
    // {"red": 2, "blue": 1} => ["red", "red", "blue"].
    _createListOfBalls(balls) {
        for (let ball of balls) {
            const ballColor = Object.keys(ball)[0];
            const numberOfBalls = ball[ballColor];
            for (let i = 0; i < numberOfBalls; i++) {
                this.balls.push(ballColor);
            }
        }
    }
    // accepts an argument indicating 
    // the number of balls to draw from the hat
    draw(numberOfBallsToDraw) {
        const ballsRemoved = [];
        for (let i = 0; i < numberOfBallsToDraw; i++) {
            // remove a ball at random
            const index = randomNumber(0, (this.balls.length - 1));
            ballsRemoved.push(this.balls.splice(index, 1));
        }
        return ballsRemoved;
    }
    // add balls to hat
    addBalls(balls) {
        this.balls.push(...balls)
    }
}


const experiment = function (hat, expectedBalls, numBallsDrawn, numExperiments) {
    let M = 0;
    // recursive function
    const experimentHelper = function (numExperiments) {
        // base case
        if (!numExperiments) return;

        const expectedBallsCopy = JSON.parse(JSON.stringify(expectedBalls));
        const extractedBalls = hat.draw(numBallsDrawn);

        // check if the expected balls have been drawn
        for (let ball of extractedBalls) {
            if (expectedBallsCopy[ball]) {
                expectedBallsCopy[ball]--;
            }
        }
        const result = Object.values(expectedBallsCopy).reduce((val, reducer) => val + reducer, 0);

        // if all the expected balls have been drawn, increase M
        if (result === 0) M++;

        //re-adds the drawn balls back to the hat
        hat.addBalls(extractedBalls);

        // recursive case
        experimentHelper((numExperiments - 1))
    }
    experimentHelper(numExperiments)

    return ((M / numExperiments) * 100);
}


const hat = new Hat({ red: 10 }, { yellow: 10 })
console.log(experiment(hat, { red: 1 }, 1, 2000))

const hat2 = new Hat({ red: 10 })
console.log(experiment(hat2, { red: 1 }, 1, 2000))


const hat3 = new Hat({ red: 5 }, { yellow : 5})
console.log(experiment(hat3, { red: 2 }, 2, 2000))

