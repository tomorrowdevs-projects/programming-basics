// In many jurisdictions a small deposit is added to drink containers to encourage people to recycle them. In one particular jurisdiction, drink containers holding one liter or less have a $0.10 deposit, and drink containers holding more than one liter have a $0.25 deposit. Write a program that reads the number of containers of each size from the user. Your program should continue by computing and displaying the refund that will be received for returning those containers. Format the output so that it includes a dollar sign and two digits to the right of the decimal point.

//chiedo all'utente quanti contenitori ha

const containerLessThanOneLiter = prompt(
  'Quanti contenitori inferiori a un litro stai depositando?'
);

const containerAboveThanOneLiter = prompt(
  'Quanti contenitori superiori a un litro stai depositando?'
);

// salvo i prezzi dei contenitori in una variabile
const containerPriceLess = 0.1;
const containerPriceAbove = 0.25;

//controllo se l'input inserito dall'utente è corretto
if (isNaN(containerLessThanOneLiter) || isNaN(containerAboveThanOneLiter)) {
  alert('inserisci un valore corretto');
  //se l'utente inserisce almeno un contenitore, procedo al calcolo dei prezzi e all'output finale
} else if (containerLessThanOneLiter > 0 || containerAboveThanOneLiter > 0) {
  const priceLess = containerPriceLess * containerLessThanOneLiter;
  const priceLessFixed = priceLess.toFixed(2);
  const priceAbove = containerPriceAbove * containerAboveThanOneLiter;
  const priceAboveFixed = priceAbove.toFixed(2);
  alert(
    `Il prezzo dei contenitori inferiori a un litro è $${priceLessFixed}, quello dei contenitori superiori a un litro è $${priceAboveFixed}`
  );
} else {
  alert('Non hai inserito alcun contenitore, niente rimborso');
}
