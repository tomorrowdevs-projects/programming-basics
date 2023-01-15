function reduceMeasures(units, measure) {
  // 3 teaspoons = 1 tablespoon
  // 16 tablespoon = 1 cup
  let teaspoons = 0;
  let tablespoons = 0;
  let cup = 0;
  let calcTablespoons = 0;
  if (measure === "teaspoons") {
    teaspoons = Math.floor(units % 3);
    calcTablespoons = Math.floor(units / 3);
    tablespoons = Math.floor(calcTablespoons % 16);
    cup = Math.floor(calcTablespoons / 16);
  } else if (measure === "cup") {
    cup = units;
  } else if (measure === "tablespoons") {
    tablespoons = Math.floor(units % 16);
    cup = Math.floor(units / 16);
  }
  return alert(
    `${cup} cup, ${tablespoons} tablespoons, ${teaspoons} teaspoons`
  );
}

const userMeasure = prompt(
  "Please enter the measures (number and measure (cup, tablespoons or teaspoons))",
  "59 teaspoons"
);
// 59 teaspoons = 1 cup, 3 tablespoons, 2 teaspoons
const splitMeasure = userMeasure.split(" ");
const userUnit = parseInt(splitMeasure[0]);
const typeMeasure = splitMeasure[1].toLowerCase();
reduceMeasures(userUnit, typeMeasure);
