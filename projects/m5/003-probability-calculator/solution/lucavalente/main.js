const Hat = require("./prob_calculator").Hat;
const experiment = require("./prob_calculator").experiment;

h1 = new Hat({"blue": 4, "red": -2, "green": 6});

probability = experiment(h1, {"blue": 2, "red": 1}, 4, 100);

console.log("Probability: ", probability + " %");

