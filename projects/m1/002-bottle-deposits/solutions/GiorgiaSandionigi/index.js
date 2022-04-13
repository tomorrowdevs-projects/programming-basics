// definisco i contenitori

const depositSmallContainer = 0,10;
const depositBigContainer = 0,25;

// faccio inserire all'utente la misura del contenitore

let totSmallContainer = prompt("insert number bottles > or = 1L");
let totBigContainer = prompt("insert number bottles < 1L");


// moltiplico il totale inseirito dall'utente per il costo del contenitore

let totdepositSmallContainer = (depositSmallContainer) * (totSmallContainer);
let totdepositBigContainer = (depositBigContainer) * (totSmallContainer);

// creo l'output

alert( `Total ${totdepositBigContainer + totdepositSmallContainer}$ `)
