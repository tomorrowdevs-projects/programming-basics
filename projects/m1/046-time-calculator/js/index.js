
let timeInput = prompt("Please, enter an hour:");
let timeAdd = prompt("Plese, enter the  amount of time to add: ");
let dayInput = prompt("Please, enter the start day of the counter: ");
let days = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];

let pmRegex = /[pP]/;
let amRegex = /[aA]/;

function addTime (timeInput, timeAdd, dayInput) {

    let timeInput2 = timeInput.replace(/[a-z]/gi, "");
    let timeArray = timeInput2.split(":");

    let hour = parseInt(timeArray[0]);
    let minute = parseInt(timeArray[1]);


    let timeAdd2 = timeAdd.replace(/[a-z]/gi, "");
    let timeAddArray = timeAdd2.split(":");

    let hourAdd = parseInt(timeAddArray[0]);
    let minuteAdd = parseInt(timeAddArray[1]);

    let amPmDisplay = "";
    let amPmCount = 0;


            let totalMinute = ((hour * 60) + minute) + ((hourAdd * 60) + minuteAdd);
            let newHour = Math.floor(totalMinute / 60);
            let newMinute = Math.floor(totalMinute % 60);
            let hourFinal = newHour;


            if (amRegex.test(timeInput) === true) {
               amPmCount = 0;

            } else if (pmRegex.test(timeInput) === true){
                amPmCount = 1;
            }


            while (hourFinal > 11){

                hourFinal = hourFinal - 12;
                amPmCount ++;

            }

            if (hourFinal == 0) hourFinal = hourFinal + 12;


            if (amPmCount % 2 === 0) {
                amPmDisplay = "AM";

            } else {
                amPmDisplay = "PM";
            }


    let daysPassed = amPmCount / 2;


            dayInput = dayInput.replace(/\W+/g, "");
            let dayOut = "";

            for (i = 0; i < days.length; i++) {

                if (days[i] === dayInput.toUpperCase()) {

                    if (daysPassed < 1) {

                        dayOut = dayInput.toUpperCase();

                    } else {

                        if (daysPassed < 7) {

                            dayOut = days[i + daysPassed];

                        } else {

                            dayOut = days[i + (daysPassed  -  7)]
                        }


                    }
                }


                }



    alert(hourFinal.toString().padStart(2, "0") + ":" + newMinute.toString().padStart(2, "0") + " " + amPmDisplay + " " + dayOut);

}

addTime(timeInput, timeAdd, dayInput);