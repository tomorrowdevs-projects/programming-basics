class Category {
  /**
   * Creates a new category
   *
   * @param {string} category - Name of the new category to be created
   */
  constructor(category) {
    this.category = category;
    this.ledger = [];
    this.balance = 0;
  }

  /**
   * Deposit a certain amount of money to this category's ledger
   *
   * @param {number} amount - The amount of money to deposit
   * @param {string} [description = ''] - Optional: the description of the operation
   */
  deposit(amount, description = "") {
    if (this.checkAmount(amount)) {
      this.ledger.push({ amount: +amount, description: description });
      this.balance += +amount;
    }
  }

  /**
   * Withdraw a certain amount of money from the category's ledger, if there is enough deposited money
   *
   * @param {number} amount - The amount of money to withdraw
   * @param {string} [description = ''] - Optional: the description of the operation
   * @returns {boolean} - True if the operation was successful, otherwise false
   */
  withdraw(amount, description = "") {
    if (this.checkFunds(amount) && this.checkAmount(amount)) {
      this.ledger.push({
        amount: -amount,
        description: description,
      });
      this.balance -= amount;
      return true;
    } else {
      return false;
    }
  }

  /**
   * Get the balance from this category
   *
   * @returns {string} - returns formatted balance with two decimals
   */
  getBalance() {
    return +this.balance.toFixed(2);
  }

  /**
   * Transfer the amount of money from one category to another, if the first category has enough funds
   *
   * @param {number} amount - The amount of money to transfer
   * @param {string} category - The recipient category
   * @returns {boolean} - True if the operation was successful, otherwise false
   */
  transfer(amount, category) {
    if (this.withdraw(+amount, `Transfer to ${category.category}`)) {
      category.deposit(+amount, `Transfer from ${this.category}`);
      return true;
    } else {
      return false;
    }
  }

  /**
   * Check if the balance of the category has at least the amount entered
   *
   * @param {number} amount - The amount to be checked against the balance
   * @returns {boolean} - True if the balance is enough to cover the amount, false otherwise
   */
  checkFunds(amount) {
    return !(+amount > +this.balance);
  }

  /**
   * Check if the amount, with two decimal, is equal or less than 7 digits
   *
   * @param {number} amount - amount to check
   * @returns {boolean} - True if the amount is equal or less than 7 digits, false otherwise
   */
  checkAmount(amount) {
    if (Number(amount).toFixed(2).length > 7) {
      console.log("The amount is too high, enter less than 9999.99€");
      return false;
    } else {
      return true;
    }
  }

  /**
   * Prints the budget for the category
   *
   * @returns {string} - The printed budget
   */
  printBudget() {
    const voidCharacters = (30 - this.category.length) / 2;
    let output = "";
    const titleLine =
      "*".repeat(Math.ceil(voidCharacters)) +
      this.category +
      "*".repeat(Math.floor(voidCharacters));
    output += titleLine + "\n";
    let totalAmount = 0;

    for (const row of this.ledger) {
      const rowDescription = row.description
        .substr(0, 23)
        .padEnd(30 - row.amount.toFixed(2).length, " ");
      const rowAmount = row.amount.toFixed(2);
      output += `${rowDescription}${rowAmount}\n`;

      totalAmount += +row.amount;
    }

    output += `Total: ${totalAmount.toFixed(2)}`;

    return output;
  }
}

module.exports = Category;
