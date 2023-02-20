

class Category {

    #balance;
    #withdraws;

    constructor(name) {
        this.name = name;
        this.ledger = [];
        this.#balance = 0;
        this.#withdraws = 0;
    }


    deposit(amount, description = ``) {
        this.ledger.push({description, amount});
        this.#balance += amount;
    }
    

    withdraw(amount, description = ``) {
        if (!this.check_funds(amount)) return false;

        this.ledger.push({description, amount: -amount})
        this.#balance -= amount;
        this.#withdraws += amount;
        return true;
    }


    get_balance() {
        return this.#balance;
    }

    get_withdraws() {
        return this.#withdraws;
    }


    transfer(amount, category) {

        if (!this.check_funds(amount)) return false;

        this.withdraw(amount, `Transfer to ${category.name}`);
        category.deposit(amount, `Transfer from ${this.name}`);
        return true;
    }


    check_funds(amount) {
        if (amount <= this.#balance) return true;
        if (amount > this.#balance) return false;
    }

    print() {
        
        const asteriskNumber = 30 - this.name.length;
        const asterisks = Array(asteriskNumber / 2).fill(`*`).join(``);
        
        const title = `${asterisks}${this.name}${asterisks}`;
        
        let list = ``;
        
        for ( let obj of this.ledger) {
            
            const amountString = obj.amount.toFixed(2).toString().substring(0, 7);
            const descriptionString = obj.description.substring(0, 23);
            
            const objectLength = descriptionString.length + amountString.length;

            
            const spaces = Array(30 - objectLength).fill(` `).join(``);
            
            const string = `${descriptionString}${spaces}${amountString}\n`;
            list += string;
            
        };
        
        const finalBalanceString = `Total: ${this.#balance.toFixed(2)}`;
        
        const outputString = `${title}\n${list}${finalBalanceString}`;
        
        console.log(outputString);
    }

};


module.exports = Category;