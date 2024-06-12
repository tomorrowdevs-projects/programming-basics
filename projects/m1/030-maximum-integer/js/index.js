
let numbersArray  = [];
let numbersArrayPrev = [];
let maxValue = 0;
let numberStored;
let counter = 0;

for (var i = 0; i < 101; i++) {
    let randomNumber  =  Math.floor((Math.random() * 100) + 1);
    numberStored  = randomNumber;

    if (maxValue > numberStored) {
        numbersArray.push(numberStored); 


    } else {
        maxValue = numberStored;
        if (numbersArray.length > 0) {
            numbersArray.push(maxValue + "<==");
            counter ++;


        } else {
            numbersArray.push(maxValue);  

        }

    }


    }




alert("The maximum value found was " +  maxValue + "!\nThe maximum value was updated " + counter + " times!\n" + numbersArray.join(", "));