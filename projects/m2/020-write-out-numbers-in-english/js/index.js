const prompt = require('prompt-sync');

const units = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"
};

const teens = {
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen"
};

const tens = {
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety"
};

const toEnglish = (num) => {
    let result = "";
    let hundreds = Math.floor(num / 100);
    let remainder = num % 100;

    if (hundreds > 0) {
        result += units[hundreds] + " hundred";
        if (remainder > 0) {
            result += " and ";
        }
    }

    if (remainder >= 20) {
        result += tens[Math.floor(remainder / 10)];
        remainder = remainder % 10;
        if (remainder > 0) {
            result += " " + units[remainder];
        }
    } else if (remainder >= 10) {
        result += teens[remainder];
    } else if (remainder > 0) {
        result += units[remainder];
    }

    return result;
}

const main = () => {
    let number = prompt("Inserisci un numero tra 1 e 999: ");
    number = parseInt(number);

    if (isNaN(number) || number < 1 || number > 999) {
        console.log("Inserimento non valido. Prego inserisci un numero tra 1 e 999.");
    } else {
        console.log(`Il numero ${number} in inglese è: "${toEnglish(number)}".`);
    }
}

main();
