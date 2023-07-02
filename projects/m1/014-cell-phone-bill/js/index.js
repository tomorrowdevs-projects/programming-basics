
const MINUTEINPUT = parseFloat(prompt("Hi! This is the automatic cellphone bill calculator!\nYour plan is $15.00 a month, and it includes:\n- 50 minutes of air time\n- 50 text messages\nRemember that every additional minute of air time costs $0.25, while additional text messages costs $0.15 each!\nPlease enter the amount in minutes of your air time:"));
const MESSAGEINPUT = parseFloat(prompt("Please enter the amount of messages you sent this month:"));
const SUPPORTCALL = 0.44;
const REGEX = /[0-9]/;

let minutesurplus = parseFloat(((MINUTEINPUT - 50) * 0.25).toFixed(2));
let messagesurplus = parseFloat(((MESSAGEINPUT - 50) * 0.15).toFixed(2));


if ( (REGEX.test(MINUTEINPUT) == true) && (REGEX.test(MESSAGEINPUT) == true) )  {

    if (MINUTEINPUT <= 50 && MESSAGEINPUT <= 50 ) {
                let percentage =  parseFloat(((15 + SUPPORTCALL) / 100) * 5);
                let totalBill = parseFloat(15 + SUPPORTCALL + percentage);
                alert("The total amount of your bill is: $" + totalBill.toFixed(2) + "\nBill fixed cost = $15.00\n911 call center fees = $0.44\nSales tax percentage (5%) = $" + percentage.toFixed(2) + "!");


    } else if  (MINUTEINPUT > 50 && MESSAGEINPUT <= 50) {
                let percentage = ((15 + SUPPORTCALL + minutesurplus) / 100) * 5;
                let  totalBill = (15 + SUPPORTCALL + minutesurplus + percentage);
                alert("The total amount of your bill is: $" + totalBill.toFixed(2) + "\nBill fixed cost = $15.00\n911 call center fees = $0.44\nAir time = $" + minutesurplus.toFixed(2) + "\nSales tax percentage (5%) = $" + percentage.toFixed(2) + "!");

    } else if  ((MINUTEINPUT <= 50) && (MESSAGEINPUT > 50)) {
                let percentage =  parseFloat(((15 + SUPPORTCALL + messagesurplus) / 100) * 5);
                let  totalBill = parseFloat(15 + SUPPORTCALL + messagesurplus + percentage);
                alert("The total amount of your bill is: $" + totalBill.toFixed(2) + "\nBill fixed cost = $15.00\n911 call center fees = $0.44\nMessages = $" + messagesurplus.toFixed(2) + "\nSales tax percentage (5%) = $" + percentage.toFixed(2) + "!");

    } else if ((MINUTEINPUT > 50) && (MESSAGEINPUT > 50)) {
                let percentage =  parseFloat(((15 + SUPPORTCALL + messagesurplus + messagesurplus) / 100) * 5);
                let  totalBill = parseFloat(15 + SUPPORTCALL + messagesurplus + minutesurplus + percentage);
                alert("The total amount of your bill is: $" + totalBill.toFixed(2) + "\nBill fixed cost = $15.00\n911 call center fees = $0.44\nMessages = $" + messagesurplus.toFixed(2) + "\nAir time = $" + minutesurplus.toFixed(2) + "\nSales tax percentage (5%) = $" + percentage.toFixed(2) + "!");


    }

} else {
    alert("Please, enter a valid input!");
    location.reload();

}