

class Category {

    #balance;

    constructor(name) {
        this.name = name;
        this.ledger = [];
        this.#balance = 0;
    }


    deposit(amount, description = ``) {
        this.ledger.push({description, amount});
        this.#balance += amount;
    }
    

    withdraw(amount, description = ``) {
        if (!this.check_funds(amount, this.#balance)) return false;

        this.ledger.push({description, amount: -amount})
        this.#balance -= amount;
        return true;
    }


    get_balance() {
        return this.#balance;
    }


    transfer(amount, category) {

        if (!this.check_funds(amount, category.get_balance())) return false;

        category.withdraw(amount, `Transfer to ${this.name}`);
        this.deposit(amount, `Transfer from ${category.name}`);
        return true;
    }


    check_funds(amount, balance) {
        if (amount <= balance) return true;
        if (amount > balance) return false;
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

const food = new Category(`Food`);
const clothing = new Category(`Clothing`);
food.deposit(1000000);
console.log(food.withdraw(1000, `restaurant and more food`));
console.log(food.get_balance());
console.log(food.ledger);
clothing.deposit(1000, `Stipendio`);
console.log(food.transfer(50, clothing));
food.print();
clothing.print();