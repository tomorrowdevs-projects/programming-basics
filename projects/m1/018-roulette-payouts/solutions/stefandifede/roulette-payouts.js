//creo un array con tutti i valori della roulette
const spaces = ["00", ...Array(37).keys()];

//genero un indice dell'array per trovare il numero vincente casuale 
const randomIndex = Math.floor(Math.random()*spaces.length);
const winningValue = spaces[randomIndex];    

//payouts: single number, red vs black, odd or even, 1-18 vs 19-36
//red vs black
const redSpaces = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]
let winningColor = " ";
function redVsBlack () {
    if (redSpaces.includes(winningValue)) {
        winningColor = "Red";
    } else (winningColor = "Black")
}

redVsBlack();


//odd or even
let winningOddOrEven = " ";
function oddOrEven () {
    if (winningValue % 2 == 0) {
        winningOddOrEven = "Even"
    } else (winningOddOrEven = "Odd")
}

oddOrEven();

//1-18 vs 19-36 
let winningLowVsHigh = " ";
function lowVsHigh() {
    if (winningValue < 19) {
        winningLowVsHigh = "1 to 18"
    } else (winningLowVsHigh = "19 to 36")
}

lowVsHigh()


//divido le possibilità di vittoria tra 0,00 e tutte le restanti possibilità, in quanto 0 e 00 devono pagare solotanto le scommesse sul numero esatto
function declaringPayouts() {
    if (winningValue == 0 || winningValue == 00) {
        alert("The spin resulted in: " + winningValue + "\nPay " + winningValue)
    } else (alert ("The spin resulted in: " + winningValue + "\nPay " + winningValue + "\nPay " + winningColor + "\nPay " + winningOddOrEven + "\nPay " + winningLowVsHigh))
}

declaringPayouts(); 