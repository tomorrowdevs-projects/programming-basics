let insertAge = prompt("Insert the number of human age that you want to convert in dog years");
let dogYears;

if (insertAge < 0) {
    alert("The negative number is not supported, Please try again");
} 
 else if (insertAge <= 2 ) {
     dogYears = (insertAge*10.5)
     alert("The equivalent of " +insertAge+ " human ages are " +dogYears+ " dog years");
} 
else {
    dogYears = (10.5*2) + ((insertAge-2) * 4 );
    alert("The equivalent of " +insertAge+ " human ages are " +dogYears+ " dog years");
}
