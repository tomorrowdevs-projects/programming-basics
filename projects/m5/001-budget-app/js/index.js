const readline = require('readline');
const { Category, createSpendChart } = require('./functions');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let categories = [];

function mainMenu() {
    console.log("\nMenu principale:");
    console.log("1. Crea una nuova categoria");
    console.log("2. Deposita denaro");
    console.log("3. Preleva denaro");
    console.log("4. Trasferisci denaro");
    console.log("5. Stampa il riepilogo di una categoria");
    console.log("6. Stampa il grafico delle spese");
    console.log("7. Esci");
    rl.question("Seleziona un'opzione: ", (choice) => {
        switch (choice) {
            case '1':
                createCategory();
                break;
            case '2':
                depositMoney();
                break;
            case '3':
                withdrawMoney();
                break;
            case '4':
                transferMoney();
                break;
            case '5':
                printSummary();
                break;
            case '6':
                printSpendChart();
                break;
            case '7':
                rl.close();
                break;
            default:
                console.log("Opzione non valida!");
                mainMenu();
                break;
        }
    });
}

function createCategory() {
    rl.question("Inserisci il nome della categoria: ", (name) => {
        let category = new Category(name);
        categories.push(category);
        console.log(`Categoria '${name}' creata!`);
        mainMenu();
    });
}

function depositMoney() {
    rl.question("In quale categoria vuoi depositare? ", (name) => {
        let category = categories.find(cat => cat.name === name);
        if (!category) {
            console.log("Categoria non trovata.");
            mainMenu();
            return;
        }
        rl.question("Quanto vuoi depositare? ", (amount) => {
            rl.question("Descrizione per il deposito (lascia vuoto se non vuoi una descrizione): ", (description) => {
                category.deposit(parseFloat(amount), description || "Deposito");
                console.log(`Deposito di ${amount} effettuato in '${name}'!`);
                mainMenu();
            });
        });
    });
}

function withdrawMoney() {
    rl.question("Da quale categoria vuoi prelevare? ", (name) => {
        let category = categories.find(cat => cat.name === name);
        if (!category) {
            console.log("Categoria non trovata.");
            mainMenu();
            return;
        }
        rl.question("Quanto vuoi prelevare? ", (amount) => {
            rl.question("Descrizione per il prelievo: ", (description) => {
                if (category.withdraw(parseFloat(amount), description)) {
                    console.log(`Prelevato ${amount} da '${name}'!`);
                } else {
                    console.log("Fondi insufficienti.");
                }
                mainMenu();
            });
        });
    });
}

function transferMoney() {
    rl.question("Da quale categoria vuoi trasferire? ", (fromName) => {
        let fromCategory = categories.find(cat => cat.name === fromName);
        if (!fromCategory) {
            console.log("Categoria di origine non trovata.");
            mainMenu();
            return;
        }
        rl.question("A quale categoria vuoi trasferire? ", (toName) => {
            let toCategory = categories.find(cat => cat.name === toName);
            if (!toCategory) {
                console.log("Categoria destinataria non trovata.");
                mainMenu();
                return;
            }
            rl.question("Quanto vuoi trasferire? ", (amount) => {
                if (fromCategory.transfer(parseFloat(amount), toCategory)) {
                    console.log(`Trasferito ${amount} da '${fromName}' a '${toName}'!`);
                } else {
                    console.log("Fondi insufficienti.");
                }
                mainMenu();
            });
        });
    });
}

function printSummary() {
    rl.question("Di quale categoria vuoi stampare il riepilogo? ", (name) => {
        let category = categories.find(cat => cat.name === name);
        if (!category) {
            console.log("Categoria non trovata.");
            mainMenu();
            return;
        }
        console.log(category.toString());
        mainMenu();
    });
}

function printSpendChart() {
    if (categories.length === 0) {
        console.log("\nNessuna categoria disponibile.");
    } else {
        console.log("\n" + createSpendChart(categories));
    }
    mainMenu();
}

mainMenu();