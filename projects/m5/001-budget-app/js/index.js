const Category = require("./class.js");
const createSpendChart = require("./function.js");

//////////////////////////

const food = new Category("Food");
const business = new Category("Business");
const entertainment = new Category("Enternainment");
const clothes = new Category("Clothes");

food.deposit(900, "deposit");

business.deposit(500);

food.withdraw(40.0, "milk, cereal, eggs, bacon, bread");

business.withdraw(50);

business.withdraw(60);
clothes.withdraw(100);

clothes.deposit(1000, "budget");
clothes.withdraw(450, "New jacket");

clothes.transfer(150, entertainment);

clothes.transfer(20, entertainment);
clothes.transfer(5000, entertainment);
business.checkFunds(1000);
entertainment.checkFunds(10);
