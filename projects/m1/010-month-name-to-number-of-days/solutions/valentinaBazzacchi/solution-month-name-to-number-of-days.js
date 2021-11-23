// Dichiaro una variabile che avrà come valore l'anno corrente
let currentTime = new Date();
let year = currentTime.getFullYear();

// Dichiaro la variabile che assumerà il valore stringa inserito dall'utente e trasformo i caratteri in minuscolo
let month = prompt("Insert a month");
month = month.toLowerCase();

switch (month) {
/* Per il mese di febbraio imposto delle condizioni per cui verrà valutato il valore dell'anno corrente, 
se divisibile per 400 o per 4 ma non per 100 allora sarà bisestile */
    case "february":
        if (year%400==0){
        alert ("29 days");
        } else if (year % 4 == 0 && year % 100 != 0){
        alert ("29 days");
        } else {
        alert("28 days");
        }
    break;
        
    case "november":
    case "april":
    case "june":
    case "september":
    alert("30 days");
    break;
        
    case "january":
    case "march":
    case "maj":
    case "july":
    case "august":
    case "october":
    case "december":
    alert("31 days");
    break;
        
    default:
    alert("Invalid Entry!");
}