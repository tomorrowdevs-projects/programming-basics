/**
 * Creates the statistics and the chart for up to 4 categories (only the first 4 categories will be used)
 *
 * @param {array} categories - An array of the categories to be included in the chart
 * @returns {string} - Returns the chart of up to 4 categories ordered by the amount spent in each
 */
function createSpendChart(categories) {
  categories = categories.slice(0, 4);
  let total = 0;
  let percentageChart = [];

  for (const category of categories) {
    let categoryTotal = 0;
    for (const movement of category.ledger) {
      if (movement.amount < 0) {
        total += -movement.amount;
        categoryTotal += -movement.amount;
      }
    }
    percentageChart.push({
      category: category.category,
      totalAmount: categoryTotal,
    });
  }

  for (const category of percentageChart) {
    category.percentage = Math.floor((category.totalAmount / total) * 10) * 10;
  }

  percentageChart = percentageChart.sort(
    (a, b) => b.totalAmount - a.totalAmount
  );
  return writeChart(percentageChart);
}

/**
 * Writes the formatted chart for the selected categories
 *
 * @param {Array.<Object>} chart - Array of the chart of each category that will be printed
 * @returns {string} - Returns the formatted chart
 */
function writeChart(chart) {
  let writtenChart = "Percentage spent by category\n";
  const maxCategoryNameLength = Math.max(
    ...chart.map((chart) => chart.category).map((element) => element.length)
  );

  const percentages = [
    "100|",
    " 90|",
    " 80|",
    " 70|",
    " 60|",
    " 50|",
    " 40|",
    " 30|",
    " 20|",
    " 10|",
    "  0|",
  ];

  for (const percentage of percentages) {
    writtenChart += percentage;
    for (const category of chart) {
      if (category.percentage >= parseInt(percentage)) {
        writtenChart += " o ";
      } else {
        writtenChart += "   ";
      }
    }
    writtenChart += "\n";
  }
  writtenChart += `    ${"-".repeat(chart.length * 3 + 1)}\n`;

  for (let i = 0; i < maxCategoryNameLength; i++) {
    writtenChart += "    ";
    for (let j = 0; j < chart.length; j++) {
      const letter = chart[j].category[i];
      if (letter) {
        writtenChart += ` ${letter} `;
      } else {
        writtenChart += "   ";
      }
    }
    writtenChart += "\n";
  }

  return writtenChart;
}

module.exports = createSpendChart;
