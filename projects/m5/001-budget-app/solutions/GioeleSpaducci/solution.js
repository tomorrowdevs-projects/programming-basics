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
        this.withdraw(amount, `transfer to ${name}`);
        name.deposit(amount, `transfer from ${this.name}`)
      } else return false
    }
    print() {
      let print = "***************";
      print = print.slice(Math.floor(this.name.length/2)) + this.name + print.slice(Math.ceil(this.name.length/2));
      for (let key of this.ledger) {
        let blank = "                              "
        if (key.description.length > 23) {
          print += `\n` + key.description.slice(0,23) + blank.slice(23);
          print = print.slice(-key.amount.length-1) + key.amount
        } else {
          print += `\n` + key.description + blank.slice(key.description.length-1);
          print = print.slice(0, -key.amount.length-1) + key.amount
        }
      }
      return print
    }
  
  }