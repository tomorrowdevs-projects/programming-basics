const createSpendChart = require("./utils")
const Category = require("./budget")

/** Creating and testing some categories */

//FOOD category
const food = new Category("Food");
food.deposit(1000, "initial deposit")
food.withdraw(10.15, "groceries")
food.withdraw(15.89, "restaurant and more food for dessert")

//CLOTHING category
const clothing = new Category("Clothing"); 
food.transfer(50, clothing)
clothing.withdraw(25.55)
clothing.withdraw(100)

//AUTO category
const auto = new Category("Auto"); 
auto.deposit(1000, "initial deposit")
auto.withdraw(15)


/** Printings */

console.log(food.toString());

console.log("\n");

console.log(clothing.toString());

console.log("\n");

console.log(auto.toString());

console.log("\n" + createSpendChart([food, clothing, auto]));


