class Category {
  constructor(name) {
    this.name = name;
    this.ledger = [];
  }
    deposit(amount, description) {
    this.ledger.push({"amount": amount, "description": description})
  }
  getBalance(){
    let sum = 0;
    for (let key of this.ledger) {
      sum += key.amount
    };
    return sum
  }
  checkFunds(amount) {
    if (this.getBalance() >= amount) return true
    else return false
  }
  withdraw(amount, description) {
    if (this.checkFunds(amount)) {
      this.deposit(-amount, description);
      return true
    } else return false
  }
  transfer(name, amount) {
    if (this.checkFunds(amount)) {
      this.withdraw(amount, `transfer to ${name.name}`);
      name.deposit(amount, `transfer from ${this.name}`)
    } else return false
  }
  print() {
    let print = "***************";
    
    print = print.slice(Math.floor(this.name.length/2)) + this.name + print.slice(Math.ceil(this.name.length/2));
    for (let key of this.ledger) {
      let blank = ".............................."
      if (key.description.length > 23) {
        print += `\n` + key.description.slice(0,23) + blank.slice(23);
        print = print.slice(0, -`${key.amount}`.length-1) + key.amount
      } else {
        print += `\n` + key.description + blank.slice(key.description.length-1);
        print = print.slice(0, -`${key.amount}`.length-1) + key.amount
      }
    }
    print += `\n` + `Total: ${this.getBalance()}`
    return print
  }

}

function createSpendChart(...args) {
  let categories = args.map((arg) => {
    const categoryTotal = arg.ledger.reduce((a, b) => {  //calculate total spent for each category
      if (b.amount < 0) return a + b.amount
      else return a
    }, 0);
    return {[arg.name]: categoryTotal}
  });
  categories = categories.map((cat) => {  //calculate total spent for all categories, and percentage for each category
    let percentage = (Object.values(cat)[0] * 100) / categories.reduce((a,b) => a + Object.values(b)[0], 0);
    return {[Object.keys(cat)[0]]: percentage}
  });

  function createLine(percentage) {  //print each line of the upper chart
    let line;
    if (percentage === 100) {
      line = `${percentage}| `
    } else if (percentage === 0) {
      line = `  ${percentage}| `
    } else {
      line = ` ${percentage}| `
    }
    line += categories.reduce((a,b) => {
      if (Object.values(b)[0] >= percentage) return a + "o "  //determinate for each column if it reached the current percentage
      else return a + "  ";
    }, "");
    if (percentage !== 0) {
      const print = line + `\n` + createLine(percentage - 10);
      return print
    } else  return line
  }
  
  function createLowerLine(i) {  //print each line of lower chart, putting names in vertical
    const line = categories.reduce((a,b) => {
      if (Object.keys(b)[0][i] !== undefined) return a + Object.keys(b)[0][i] + " "  //read letter at given index, if present print it, otherwise print a space
      else return a + "  "
    }, "     ");
    if (line !== categories.reduce((a,b) => a + "  ", "     ")) {  //check for reaching last letter of longest word
      const print = line + `\n` + createLowerLine(i+1); //if max length not reached, read letters at next index
      return print
    } else return ""
  }
  return createLine(100) + `\n` + categories.reduce((a,b) => a + "--","-----") + `\n`+ createLowerLine(0) //put chart together
}