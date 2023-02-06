const { Category, categories } = require("./budget");
const createSpendChart = require("./functions");

const food = new Category("Food");
food.deposit(1000, "initial deposit");
food.withdraw(10.15, "groceries");
food.withdraw(50.0, "restaurant and more food for dessert");

//CLOTHING category
const clothing = new Category("Clothing");
food.transfer(50, clothing);
console.log(food.ledger[3]);
clothing.withdraw(25.55);
clothing.withdraw(100);

//AUTO category
const auto = new Category("Auto");
auto.deposit(1000, "initial deposit");
auto.withdraw(15);

const home = new Category("Home");
home.deposit(800, "initial deposit");
home.withdraw(250.0, "rent");
home.withdraw(300, "light bill");

const entertainment = new Category("Entertainment");
auto.transfer(200, entertainment);
entertainment.deposit(500, "initial deposit");
entertainment.withdraw(250.0);

console.log(
  `${food.print()}\n${clothing.print()}\n${auto.print()}\n${home.print()}\n${entertainment.print()}}`
);
console.log(createSpendChart(categories));
