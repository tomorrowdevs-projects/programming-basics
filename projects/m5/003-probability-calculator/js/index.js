const probCalculator = require("./prob_calculator");

const hat = new probCalculator.Hat({ blue: 3, red: 2, green: 6 });

const firstExperiment = probCalculator.experiment(
  hat,
  { blue: 2, green: 1 },
  4,
  1000
);

console.log(firstExperiment);

const hat2 = new probCalculator.Hat({
  yellow: 5,
  red: 1,
  green: 3,
  blue: 9,
  test: 1,
});
const secondExperiment = probCalculator.experiment(
  hat2,
  { yellow: 2, blue: 3, test: 1 },
  20,
  100
);

console.log(secondExperiment);
