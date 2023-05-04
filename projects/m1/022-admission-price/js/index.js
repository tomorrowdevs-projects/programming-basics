//dichiaro le variabili da usare nel loop 
let age;
let sum = 0;
let priceValue;
let countPeople;
let groupNumb = 0;

// se la variabile age è uguale ad uno spazio vuoto si interrompe il loop
while (age != '') {
  age = prompt('insert the age of the guests');
//inserisco le varie condizioni di suddivisione di età e restituisco il prezzo e tengo il conteggio delle persone
  if (age <= 2) {
    priceValue = '0';
    countPeople = 1;
  }  else if (age >= 3 && age <=12) {
    priceValue = '14';
    countPeople = 1;
  } else if (age >= 65) {
    priceValue = '18';
    countPeople = 1;
  } else {
    priceValue = '23';
    countPeople = 1;
  }
  alert('Admission price: ' + priceValue + ' $ ');
  sum += +priceValue;
  groupNumb += countPeople;
}

alert(`Your group is composed by: ${groupNumb - 1} people,the total price of the group is: ${sum}$`);
