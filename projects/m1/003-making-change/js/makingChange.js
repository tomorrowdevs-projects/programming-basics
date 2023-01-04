// toonies = 200 - loonies = 100 - quarters = 25 - dimes = 10 - nickels = 5 - penny = 1

let moneyCashIn,
  moneyCashInConv,
  restMoney,
  toonies,
  loonies,
  half,
  quarters,
  dimes,
  nickels,
  penny;

moneyCashIn = +prompt("Please insert the money you wish to change:");
moneyCashInConv = moneyCashIn * 100;

toonies = Math.floor(moneyCashInConv / 200);
restMoney = moneyCashInConv % 200;

loonies = Math.floor(restMoney / 100);
restMoney = restMoney % 100;

quarters = Math.floor(restMoney / 25);
restMoney = restMoney % 25;

dimes = Math.floor(restMoney / 10);
restMoney = restMoney % 10;

nickels = Math.floor(restMoney / 5);
restMoney = restMoney % 5;

penny = Math.floor(restMoney / 1);
restMoney = restMoney % 1;

alert(`
    To change Money ${moneyCashIn}
    Money covert  in the number integer is ${moneyCashInConv} \n
    Number of Toonies  200 --> ${toonies}
    Number of Loonies 100 --> ${loonies}
    Number of Quarters 25 --> ${quarters}
    Number of Dimes 10 --> ${dimes}
    Number of Nikels 5 --> ${nickels}
    Number of Penny 1 --> ${penny} `);
