// 008 dog-years


let humanYears = parseInt(prompt('Enter the number of human years you want to convert in dog years: ', 0));
let dogYears;

while (!(humanYears >= 0) || isNaN(humanYears))  {
    let newHumanYears = parseInt(prompt('Errore! Please enter a positive number to indicate human years.', 0));
    humanYears = newHumanYears;
};

if (humanYears > 2) {
    dogYears = (2*10.5) + ((humanYears-2)*4);
} else {
    dogYears = humanYears*10.5;
};

console.log('The equivalent dogs years are: ' + dogYears);
