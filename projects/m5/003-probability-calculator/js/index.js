/** Class representing a hat */
class Hat {
  /**
   * Represents the balls inside the hat.
   * @constructor
   * @param  {...string} balls - variable number of arguments
   */
  constructor(...balls) {
    this.balls = this.#createObject(balls);
    this.contents = this.objectToList(this.balls);
  }

  /**
   * Create an object from the parameter inserted in the constructor function.
   * Private method, initialised in the constructor.
   *
   * @private
   * @param {array} list - array to be converted in object
   * @returns {object}
   */
  #createObject(list) {
    const obj = {};
    for (let element of list) {
      element = element.split("=");
      obj[element[0]] = +element[1];
    }
    return obj;
  }

  /**
   * Convert object in a list of balls
   *
   * @param {object} balls
   * @returns {array}
   */
  objectToList(balls) {
    const list = [];
    for (const [key, value] of Object.entries(balls)) {
      let i = value;
      while (i > 0) {
        list.push(key);
        i--;
      }
    }
    return list;
  }

  /**
   * Convert list in a object of balls
   *
   * @param {array} balls
   * @returns {object}
   */
  listToObject(balls) {
    const object = {};

    for (const element of balls) {
      if (object[element]) {
        object[element]++;
      } else {
        object[element] = 1;
      }
    }

    return object;
  }

  /**
   * Draw n random balls from the hat
   *
   * @param {number} numberOfBalls - number of balls to be drawn
   * @returns {array} - list of the randomly drawn balls
   */
  draw(numberOfBalls) {
    if (numberOfBalls >= this.contents.length) {
      return this.contents.splice(0, this.contents.length);
    } else {
      const drawResult = [];
      let i = numberOfBalls;
      while (i > 0) {
        const random = Math.floor(Math.random() * this.contents.length);
        drawResult.push(...this.contents.splice(random, 1));
        i--;
      }
      return drawResult;
    }
  }
}

/**
 * Perform experiments of balls extractions and returns the percentage of success.
 * An experiment is successful if the expected balls are drawn.
 *
 * @param {Hat} hat - represent a Hat object
 * @param {object} expectedBalls - expected color of the balls to be drawn
 * @param {number} numBallsDrawn - number of balls to be drawn from the hat
 * @param {number} numExperiments - number of the experiments to be done
 * @returns {number} - the percentage of success
 */
function experiment(hat, expectedBalls, numBallsDrawn, numExperiments) {
  let yes = 0;
  let count = 0;

  while (numExperiments > 0) {
    count++;
    const hatList = hat.listToObject(hat.draw(numBallsDrawn));

    const check = Object.entries(expectedBalls).every(
      ([key, value]) => hatList[key] >= value
    );

    yes += check ? 1 : 0;
    numExperiments--;
    hat.contents = hat.objectToList(hat.balls);
  }

  return yes / count;
}

module.exports = { Hat, experiment };
