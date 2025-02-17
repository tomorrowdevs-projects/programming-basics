const cloneDeep = require("lodash.clonedeep");

class Hat {
  constructor(balls = { black: 1 }) {
    this.contents = [];

    if (this.#checkInput(balls))
      throw new Error("The input must be of type object");

    for (const [key, value] of Object.entries(balls)) {
      for (let i = 0; i < value; i++) {
        this.contents.push(key);
      }
    }
  }

  #checkInput(arg) {
    return typeof arg != "object" ? true : false;
  }

  getContents() {
    return this.contents;
  }

  draw(int) {
    if (int >= this.contents.length) return this.contents;
    const selectedBalls = [];
    for (let i = 0; i < int; i++) {
      const randomIndex = Math.floor(Math.random() * this.contents.length);
      selectedBalls.push(this.contents[randomIndex]);
      this.contents.splice(randomIndex, 1);
    }
    return selectedBalls;
  }
}

function checkEstractions(expected, extraction) {
  return expected.every((e) => extraction.includes(e));
}

function experiment(hat, expectedBalls, numBallsDraw, numExperiments) {
  let success = 0;

  const expectedList = new Hat(expectedBalls).getContents();

  for (let i = 0; i < numExperiments; i++) {
    const hatCopy = cloneDeep(hat);
    const extraction = hatCopy.draw(numBallsDraw);
    if (checkEstractions(expectedList, extraction)) {
      success++;
    }
  }

  return success / numExperiments;
}


module.exports = { Hat, experiment};
