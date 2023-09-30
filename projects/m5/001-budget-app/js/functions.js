class Category {
    constructor(name) {
        this.name = name;
        this.ledger = [];
    }

    deposit(amount, description = "") {
        this.ledger.push({ amount: amount, description: description });
    }

    withdraw(amount, description = "") {
        if (this.checkFunds(amount)) {
            this.ledger.push({ amount: -amount, description: description });
            return true;
        }
        return false;
    }

    getBalance() {
        return this.ledger.reduce((acc, entry) => acc + entry.amount, 0);
    }

    transfer(amount, category) {
        if (this.checkFunds(amount)) {
            this.withdraw(amount, `Transfer to ${category.name}`);
            category.deposit(amount, `Transfer from ${this.name}`);
            return true;
        }
        return false;
    }

    checkFunds(amount) {
        return this.getBalance() >= amount;
    }

    toString() {
        let output = this.name.centered(30, '*') + '\n';
        for (let entry of this.ledger) {
            let description = entry.description.substring(0, 23).padEnd(23);
            let amt = entry.amount.toFixed(2).toString().padStart(7);
            output += `${description}${amt}\n`;
        }
        output += `Total: ${this.getBalance().toFixed(2)}`;
        return output;
    }
}

String.prototype.centered = function (len, char) {
    let diff = len - this.length;
    let pad1 = Math.floor(diff / 2);
    let pad2 = diff - pad1;
    return char.repeat(pad1) + this + char.repeat(pad2);
};

function createSpendChart(categories) {
    // Calcola le percentuali di spesa per ogni categoria
    let totals = categories.map(cat => cat.ledger.reduce((sum, entry) => entry.amount < 0 ? sum + Math.abs(entry.amount) : sum, 0));
    let grandTotal = totals.reduce((sum, amt) => sum + amt, 0);
    let percentages = totals.map(amt => Math.floor((amt / grandTotal) * 100));

    // Crea il grafico
    let output = "Percentage spent by category\n";
    for (let i = 100; i >= 0; i -= 10) {
        output += i.toString().padStart(3) + "| ";
        for (let percent of percentages) {
            output += percent >= i ? "o  " : "   ";
        }
        output += "\n";
    }
    output += "    -" + "---".repeat(categories.length) + "\n";

    // Aggiungi i nomi delle categorie in verticale
    let maxNameLength = Math.max(...categories.map(cat => cat.name.length));
    for (let i = 0; i < maxNameLength; i++) {
        output += "     ";
        for (let cat of categories) {
            output += (cat.name[i] || " ") + "  ";
        }
        if (i < maxNameLength - 1) output += "\n";
    }

    return output;
}

module.exports = {
    Category,
    createSpendChart
};
