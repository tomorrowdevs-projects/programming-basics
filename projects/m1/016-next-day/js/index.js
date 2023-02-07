// *******Costant prompt Syn *******************/
const prompt = require("prompt-sync")();//*****/
// *********************************************/

let deyUserIn, monthUserIn;

deyUserIn = parseInt(prompt("Insert the Day   --> "));
monthUserIn = parseInt(prompt("Insert the Month --> "));
yearUserIn = parseInt(prompt("Insert the Year  --> "));
//yearUserIn = parseInt(2013);

// funzione calcolo data fine mese e inizio nuovo mese
function deyManthYearNew(deyOneNew, monthOneNew, yearNew) {

  deyOneNew = parseInt(1);
  monthOneNew = parseInt(1);
  yearNew = yearNew + 1;

  printDateNextDay(deyUserIn, monthUserIn, yearUserIn);
  yearLeap(yearUserIn);

  return deyManthYearNew;
}

// funzione calcolo  giorni di un mese
function deyNextMonthYearCurrent(deyNext, monthCurrent, yearCurrent) {

  deyNext = deyNext + 1;
  monthCurrent = monthCurrent;
  yearCurrent = yearCurrent;

  printDateNextDay(deyUserIn, monthUserIn, yearUserIn);
  yearLeap(yearUserIn);

  return deyNextMonthYearCurrent;
}

// funzione calcolo  data messe prossimo con giorno 1
function deyOneMonthNextTeYearCurrent(deyOne, monthNext, theYearCurrent) {

  deyOne = parseInt(1);
  monthNext = monthNext + 1;
  theYearCurrent = theYearCurrent;

  printDateNextDay(deyUserIn, monthUserIn, yearUserIn);
  yearLeap(yearUserIn);

  return deyOneMonthNextTeYearCurrent;
}

// funzione stampa data
function printDateNextDay(dey, month, year) {
  if ((dey >= 10 && month >= 10)) {
    console.log("\nThe next date is the one entered and: " + dey + "-" + month + "-" + year + "\n");
  } else if (dey < 10 && month < 10) {
    console.log("\nThe  next date is the one entered and: " + "0" + dey + "-0" + month + "-" + year + "\n");
  } else if (dey < 10 && month >= 10) {
    console.log("\nThe  next date is the one entered and: " + "0" + dey + "-" + month + "-" + year + "\n");
  } else if (dey >= 10 && month < 10) {
    console.log("\nThe  next date is the one entered and: " + dey + "-0" + month + "-" + year + "\n");
  }
  return printDateNextDay;
}

// function to determine if this year is a leap year
function yearLeap(yearLeap) {
  // if the inserted year is divided by 400 or by 4 and has a rest of 0 --> leap year
  if (yearLeap % 400 === Number()) {
    console.log("The inserted year is leap year :", yearLeap, "\n");
  } else if ((yearLeap % 100) === Number()) {
    console.log("The inserted year is not a leap year :", yearLeap, "\n");
  } else if (yearLeap % 4 === Number()) {
    console.log("The inserted year is leap year :", yearLeap, "\n");
  } else {
    console.log("The inserted year is not a leap year :", yearLeap, "\n");
  }
  return yearLeap;
}

// funzione messaggio errore
function errorMessage() {
  console.log("\nERROR! --> The value in invalid.\n");
  return errorMessage;
}


if ((((deyUserIn >= 01 && deyUserIn <= 28) && monthUserIn === 2) || (deyUserIn >= 01 && deyUserIn <= 31) || (deyUserIn >= 01 && deyUserIn <= 30) && deyUserIn <= 31) && monthUserIn <= 12) {
 
  if (((monthUserIn === 4 && deyUserIn === 30) || (monthUserIn === 6 && deyUserIn === 30) || (monthUserIn === 9 && deyUserIn === 31) || (monthUserIn === 11 && deyUserIn === 31)) && monthUserIn <= 12) {
    deyUserIn = 1;
    monthUserIn = monthUserIn + 1;
    yearUserIn = yearUserIn;

    deyOneMonthNextTeYearCurrent(deyUserIn, monthUserIn, yearUserIn);
    /* printDateNextDay(deyUserIn, monthUserIn, yearUserIn);
     yearLeap(yearUserIn)
     console.log("\n1 - Day  -->", deyUserIn, "Month whit day 30 -->", monthUserIn, " Year -->", yearUserIn, "\n"); */
  }
  else
   
    if (((monthUserIn === 1 && deyUserIn === 31) || (monthUserIn === 3 && deyUserIn === 31) || (monthUserIn === 5 && deyUserIn === 31) || (monthUserIn === 7 && deyUserIn === 31) || (monthUserIn === 1 && deyUserIn === 31) ||
      (monthUserIn === 8 && deyUserIn === 31) || (monthUserIn === 10 && deyUserIn === 31)) && monthUserIn <= 12) {

      deyUserIn = parseInt(1);
      monthUserIn = monthUserIn + 1;
      yearUserIn = yearUserIn;

      deyOneMonthNextTeYearCurrent(deyUserIn, monthUserIn, yearUserIn);
      /* printDateNextDay(deyUserIn, monthUserIn, yearUserIn);
      yearLeap(yearUserIn)
      console.log("\n2 - Day -->", deyUserIn, "Month whit day 31 -->", monthUserIn, " Year -->", yearUserIn, "\n");*/
    }
    else if (monthUserIn === 12 && deyUserIn === 31) {

      deyUserIn = parseInt(1);
      monthUserIn = parseInt(1);
      yearUserIn = yearUserIn + 1;

      deyManthYearNew(deyUserIn, monthUserIn, yearUserIn);
      /* printDateNextDay(deyUserIn, monthUserIn, yearUserIn);
       yearLeap(yearUserIn)
      console.log("\n3 - Month December 31 -- New Year -- Day -->", deyUserIn, "Month ", monthUserIn, " Year -->", yearUserIn, "\n");*/
    }
    else if ((monthUserIn === 2 && deyUserIn <= 28) /*&& deyUserIn <= 28*/) {

      deyUserIn = parseInt(1);
      monthUserIn = monthUserIn + 1;
      yearUserIn = yearUserIn;

      deyOneMonthNextTeYearCurrent(deyUserIn, monthUserIn, yearUserIn);
      /*  printDateNextDay(deyUserIn, monthUserIn, yearUserIn);
       yearLeap(yearUserIn)
      console.log("\n4 - Month monthFebruary day 28 --Day -->", deyUserIn, "Month -->", monthUserIn, " Year -->", yearUserIn, "\n");*/
    }
    else if ((deyUserIn >= 01 && deyUserIn <= 30) || (deyUserIn >= 01 && deyUserIn <= 31) || ((deyUserIn >= 01 && deyUserIn <= 28) && monthUserIn === 2)) {

      deyUserIn = deyUserIn + 1;
      monthUserIn = monthUserIn;
      yearUserIn = yearUserIn;

      deyNextMonthYearCurrent(deyUserIn, monthUserIn, yearUserIn);
      /* printDateNextDay(deyUserIn, monthUserIn, yearUserIn);
       yearLeap(yearUserIn)
      console.log("\n5 - Days current month -- Day -->", deyUserIn, "Month  -->",  monthUserIn, " Year -->", yearUserIn, "\n");*/
    } else {
      errorMessage();
      //console.log("1");
    }
} else {
  errorMessage();
  // console.log("2");
}