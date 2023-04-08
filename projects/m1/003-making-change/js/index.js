//input cifra da convertire
let importoTotale = 476;
let monetaPartenza = 200; //tonie
let monetaOttenuta = 0;
let restoMoneta = 0;

console.log("Hai introdotto nella macchina " + importoTotale + " centesimi "+ "che equivalgono a");

if (importoTotale >= monetaPartenza) {
    monetaOttenuta = importoTotale / monetaPartenza;
    console.log( Math.trunc(monetaOttenuta)+" toonie");
    importoTotale = (importoTotale % monetaPartenza)

}

monetaPartenza = 100; //loonie

if (importoTotale >= monetaPartenza) {
    monetaOttenuta = importoTotale / monetaPartenza;
    console.log( Math.trunc(monetaOttenuta)+" loonie");
    importoTotale = (importoTotale % monetaPartenza)

}

monetaPartenza = 25; //quarter

if (importoTotale >= monetaPartenza) {
    monetaOttenuta = importoTotale / monetaPartenza;
    console.log( Math.trunc(monetaOttenuta)+" quarter");
    importoTotale = (importoTotale % monetaPartenza)

}

monetaPartenza = 10; //dime

if (importoTotale >= monetaPartenza) {
    monetaOttenuta = importoTotale / monetaPartenza;
    console.log( Math.trunc(monetaOttenuta)+" dime");
    importoTotale = (importoTotale % monetaPartenza)

}

monetaPartenza = 5; //nickel

if (importoTotale >= monetaPartenza) {
    monetaOttenuta = importoTotale / monetaPartenza;
    console.log( Math.trunc(monetaOttenuta)+" nickel");
    importoTotale = (importoTotale % monetaPartenza)

}

monetaPartenza = 1; //penny

if (importoTotale >= monetaPartenza) {
    monetaOttenuta = importoTotale / monetaPartenza;
    console.log( Math.trunc(monetaOttenuta)+" penny");
    importoTotale = (importoTotale % monetaPartenza)

}
