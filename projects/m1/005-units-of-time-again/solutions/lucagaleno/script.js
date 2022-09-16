//units of time again

let secondsInputFormat = /^\d+$/; //see regexp
let secondsInput = +prompt("enter a number of seconds: ",0);

while (! (secondsInputFormat.test(secondsInput))){
    let newSecondValue = +prompt("Please enter the amount of seconds as an INTEGER:", 0);
    secondsInput = newSecondValue
};

let days = Math.floor(secondsInput/24/60/60) ;
let hours = Math.floor(((secondsInput - (days*24*60*60))/60/60)) ;
let minutes =  Math.floor((secondsInput-(days*24*60*60)-(hours*60*60))/60);
let seconds = (secondsInput-(days*24*60*60)-(hours*60*60) - (minutes*60));

if (days > 1) {
    alert('Errore i giorni totali non posso superare 1 cifra (>9gg), riprova!');
    process.exit();
};

let time = [hours, minutes, seconds];

time.forEach((element, index) => {

    if (element.toString().length === 1) {
        time[index]="0" + time[index];
        //console.log(time[index]);
    }
});

console.log('final result: ' + days + ':' + time[0] +':' + time[1] + ':' + time[2]);

