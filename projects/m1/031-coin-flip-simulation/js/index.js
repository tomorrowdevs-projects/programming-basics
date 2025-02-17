let outputStringArray = [];
let spinCounterArray = 0;



for (i = 0; i < 10; i ++) {

let headCounter = 0;
let tailCounter = 0;
let outputString = '';
let spinCounter = 0;

let randomFirst = Math.floor((Math.random() * 2) + 1);

while ((headCounter < 3) && (tailCounter < 3)) {
    let random = Math.floor((Math.random() * 2) + 1);
    if (random === randomFirst) {

        if (random === 1) {
            headCounter ++;

        } else {
            tailCounter ++;
        }


    } else {

        if (random === 1) {
            headCounter ++;
            tailCounter = 0;

        } else {
            tailCounter ++;
            headCounter = 0;
        }

    }
    if (random === 1) {
        outputString += "H "

    } else {
        outputString += "T "

    }
    randomFirst = random;
    spinCounter ++;


}
    outputStringArray.push(outputString + " " + "(" + spinCounter +" flips)!");
    spinCounterArray += spinCounter;
}

alert(outputStringArray.join("\n") + "\nOn average, " + spinCounterArray / 10 + " flips were needed." );