const categories = [];

class Category {
  constructor(name) {
    this.name = name;
    this.ledger = [];
    this.balance = 0;
    categories.push(this);
  }

  checkInput(amount) {
    return (amount < 10000 && !isNaN(amount)) ? true : false;
  }

  deposit(amount, description = "") {
    if (this.checkInput(amount)) {
      this.ledger.push({ amount: amount, description: description });
      this.balance += amount;
    }
  }

  withdraw(amount, description =  "") {
    if (this.checkFunds(amount) && this.checkInput(amount)) {
      this.ledger.push({ amount: -amount, description: description });
      this.balance -= amount;
      return true;
    }
    return false;
  }

  
  transfer(amount, category) {
    if (this.checkFunds(amount) && this.checkInput(amount)) {
      this.withdraw(amount, `Transfer to ${category.name}`);
      category.deposit(amount, `Transfer from ${this.name}`);
      return true;
    }
    return false;
  }


  getBalance() {
    return this.balance;
  }

  checkFunds(amount) {
    return this.getBalance() < amount ? false : true;
  }

  print() {
    const nameLength = this.name.length;
    const padding = "*".repeat(Math.floor((30 - nameLength) / 2));
    const title = `${padding}${this.name}${padding}\n`;

    let ledger = "";
    this.ledger.forEach((item) => {
      const description = item.description.slice(0, 23);
      const amount = item.amount.toFixed(2);
      ledger += `${description}${" ".repeat(
        30 - description.length - amount.length
      )}${amount}\n`;
    });

    const total = `Total: ${this.getBalance().toFixed(2)}`;
    return title + ledger + total;
  }
}

module.exports = {Category, categories};