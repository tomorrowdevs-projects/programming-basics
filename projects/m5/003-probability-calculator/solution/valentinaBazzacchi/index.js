const probCalculator = require("./prob-calculator")


const hat = new probCalculator.Hat({blue:4, red:2, green:6});
const probability = probCalculator.experiment(hat, {blue:2, red:1}, 4, 1000);


console.log(probability);
