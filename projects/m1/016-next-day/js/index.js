// *******Costant prompt Syn *******************/
const prompt = require("prompt-sync")();//*****/
// *********************************************/

let deyUserIn, monthUserIn, yearUserIn;

deyUserIn = parseInt(prompt("Insert the Day   --> "));
monthUserIn = parseInt(prompt("Insert the Month --> "));
//yearUserIn = parseInt(prompt("Insert the Year  --> "));
yearUserIn = parseInt(2013);

//**************************************************************************************************************
// function to message ERROR
function messageError() {
  console.log("\nERROR!\n");
}

// function calculation  day one and next month + year current
function deyOneMonthNextTeYearCurrent(deyOne, monthNext, theYearCurrent) {
  // calculation  day one and next month + year current
  deyOne = 1;
  monthNext = monthNext + 1;
  theYearCurrent = theYearCurrent;
  // date printing function
  printDateNextDay(deyOne, monthNext, theYearCurrent);

  return deyOneMonthNextTeYearCurrent;
}

// function to calculate the successive days of the current month
function deyNextMonthYearCurrent(deyNext, monthCurrent, yearCurrent) {

  // calculate the successive days of the current month
  deyNext = deyNext + 1;
  monthCurrent = monthCurrent;
  yearCurrent = yearCurrent;
  // date printing function
  printDateNextDay(deyNext, monthCurrent, yearCurrent);

  return deyNextMonthYearCurrent;
}

// function to calculate the date of December and the start of the new year + year leep
function deyManthYearNew(deyOneNew, monthOneNew, yearNew) {
  if (deyUserIn === 31) {
    deyOneNew = 1;
    monthOneNew = 1;
    yearNew = yearNew + 1;
    // date printing function
    printDateNextDay(deyOneNew, monthOneNew, yearNew);
    // function print date year leeap
    printYearLeapDate(yearNew);
  } else if (deyUserIn < 30) {
    // function to calculate the successive days of the current month
    deyNextMonthYearCurrent(deyOneNew, monthOneNew, yearNew);
  } else if (deyUserIn > 31) {
    // function to message ERROR
    messageError();
  }
  return deyManthYearNew;
}

// function to calculate the date the Febbrary
function deyManthFebbrary(deyOneFebbrary, manthFebbrary, yearManthFebbrary) {

  if (deyOneFebbrary === 28) {
    // function calculation  day one and next month + year current
    deyOneMonthNextTeYearCurrent(deyOneFebbrary, manthFebbrary, yearManthFebbrary);

  } else if (deyOneFebbrary < 27) {
    // function to calculate the successive days of the current month
    deyNextMonthYearCurrent(deyOneFebbrary, manthFebbrary, yearManthFebbrary);
  } else if (deyOneFebbrary > 28) {
    // function to message ERROR
    messageError();
  }
  return deyManthFebbrary;
}

// function to determine if this year is a leap year
function yearLeapDate(yearLeap) {
  // if the inserted year is divided by 400 or by 4 and has a rest of 0 --> leap year
  if (yearLeap % 400 === Number()) {
    return true;
  } else if ((yearLeap % 100) === Number()) {
    return false;
  } else if (yearLeap % 4 === Number()) {
    return true;
  } else {
    return false;
  }
}

// function print date year leeap
function printYearLeapDate(printYearLeep) {
  if (printYearLeep === true) {
    console.log("The ", printYearLeep, " is a Year Leapp");
  } else {
    console.log("The ", printYearLeep, " is a not Year Leapp");
  }
  return printYearLeapDate;
}

// date printing function
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

// check years and months
if ((yearUserIn >= 1584 && yearUserIn >= 3999) || (monthUserIn >= 01 && monthUserIn <= 12)) {
  // I determine months with 31 days
  if ((monthUserIn === 1) || (monthUserIn === 3) || (monthUserIn === 5) || (monthUserIn === 7) || (monthUserIn === 8) || (monthUserIn === 10) || (monthUserIn === 12)) {
    // case months whit  31 Day
    if (monthUserIn === 12) {
      // function to calculate the date of December and the start of the new year + year leep
      deyManthYearNew(deyUserIn, monthUserIn, yearUserIn);
      // case months of December of  31 Day
    } else if (deyUserIn === 31) {
      // function calculation  day one and next month + year current
      deyOneMonthNextTeYearCurrent(deyUserIn, monthUserIn, yearUserIn);
    } else if (deyUserIn <= 30) {
      // function to calculate the successive days of the current month
      deyNextMonthYearCurrent(deyUserIn, monthUserIn, yearUserIn);
    } else if (deyUserIn > 31) {
      // function to message ERROR
      messageError();
    }
    // case months with 30 days
  } else if (deyUserIn === 30) {
    // function calculation  day one and next month + year current
    deyOneMonthNextTeYearCurrent(deyUserIn, monthUserIn, yearUserIn);
  } else if (deyUserIn <= 29) {
    // function to calculate the successive days of the current month
    deyNextMonthYearCurrent(deyUserIn, monthUserIn, yearUserIn);
  } else if (deyUserIn > 30) {
    messageError();
    // case month Febbrary with 28 days
  } else if (monthUserIn === 2) {
    // function to calculate the date of Febbrary  whit 28 days
    deyManthFebbrary(deyUserIn, monthUserIn, yearUserIn);
  }
} else {
  // function to message ERROR
  messageError();
}

/*
**********************************************************************************
  Secondo il mio parere il problema sorge in questa funzione
***********************************************************************************
// function to calculate the date the Febbrary
function deyManthFebbrary(deyOneFebbrary, manthFebbrary, yearManthFebbrary) {
/
  if (deyOneFebbrary === 28) {
    // function calculation  day one and next month + year current
    deyOneMonthNextTeYearCurrent(deyOneFebbrary, manthFebbrary, yearManthFebbrary);

  } else if (deyOneFebbrary < 27) {
    //function to calculate the successive days of the current month
    deyNextMonthYearCurrent(deyOneFebbrary, manthFebbrary, yearManthFebbrary);
  } else if (deyOneFebbrary > 28) {
    // function to message ERROR
    messageError();
  }
*************************************************************************************
  */