let bottleSmall = prompt("Quante bottiglie inferiori o uguali a un litro possiedi?");
let bottleLarge = prompt("Quante bottiglie superiori a un litro possiedi?");

sumBottleSmall = bottleSmall * 0.10;
sumBottleLarge = bottleLarge * 0.25;
sumTotal = sumBottleSmall + sumBottleLarge;

alert("Hai diritto a un rimborso di " + sumTotal + "$");