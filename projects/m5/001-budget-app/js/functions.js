function createSpendChart(categories) {
  let chart = "Percentage spent by category\n";
  let categoryTotals = {};
  // let totalSpent = 0;
  categories.forEach((item) => {
    categoryTotals[item.name] = 0;
    item.ledger.forEach((elem) => {
      if (elem.amount < 0) {
        categoryTotals[item.name] += Math.abs(elem.amount);
        // totalSpent += Math.abs(elem.amount);
      }
    });
  });

  const totalSpent = Object.values(categoryTotals).reduce((prev,curr) => prev + curr);
 

  for (let i = 100; i >= 0; i -= 10) {
    chart += (i + "| ").padStart(5)
    for (const category in categoryTotals) {
      if (Math.floor((categoryTotals[category] / totalSpent) * 100) >= i) {
        chart += "o  ";
      }else{
        chart += '   '
      }
    }
    chart += "\n";
  }

  chart += " ".repeat(4) + "-".repeat(categories.length * 3) + "-" + "\n";

  let maxLength = 0;
  for (const category in categoryTotals) {
    if (category.length > maxLength) {
      maxLength = category.length;
    }
  }
 

  for (let i = 0; i < maxLength; i++) {
    chart += " ".repeat(5);
    for (const name in categoryTotals) {
     chart += (name.length > i) ? name[i] + '  ' : '   '
    }
    chart += "\n";
  }
  return chart;
}

module.exports = createSpendChart;
