const Category = require("./category");
const createSpendChart = require("./create-spend-chart");

const food = new Category("Food")
food.deposit(1000, "initial deposit");
food.withdraw(10.15, "groceries");
food.withdraw(15.89, "restaurant and more food for dessert");
console.log(food.getBalance());

const clothing = new Category("Clothing");
food.transfer(50, clothing);
clothing.withdraw(25.55);
clothing.withdraw(100);

const auto = new Category("Auto");
auto.deposit(1000, "initial deposit");
auto.withdraw(15);


console.log(food);
console.log(clothing);

console.log(createSpendChart([food, clothing, auto]));



