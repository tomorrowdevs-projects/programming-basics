    let insertValue = (prompt("Please Insert A Note!")).toUpperCase();
    let isValid = /^([A-G][0-8])$/.test(insertValue);
    let insLetter;
    let insNumber;
    let result;

    if (isValid){
        insLetter = insertValue.slice(0,1);
        insNumber = insertValue.slice(1,2);
    } 
    
    else {
        alert("This Note IS NOT Supported, Please Try Again");
    }

    if (insLetter == "C") {
        result = (261.63/(Math.pow(2,4-insNumber))).toFixed(2);
        alert("Note's Frequency " + result + " HZ" );
    } else if (insLetter == "D") {
        result = (293.66/(Math.pow(2,4 - insNumber))).toFixed(2);
        alert("Note's Frequency " + result + " HZ" );
    } else if (insLetter == "E") {
        result = (329.63/(Math.pow(2,4-insNumber))).toFixed(2);
        alert("Note's Frequency " + result + " HZ" );
    } else if (insLetter == "F") {
        result = (349.23/(Math.pow(2,4-insNumber))).toFixed(2);
        alert ("Note's Frequency " + result + " HZ" );
    } else if (insLetter == "G") {
        result = (392.00/(Math.pow(2,4-insNumber))).toFixed(2);
        alert ("Note's Frequency " + result + " HZ" );
    } else if (insLetter == "A") {
        result = (440.00/(Math.pow(2,4- insNumber))).toFixed(2);
        alert ("Note's Frequency " + result + " HZ" );
    } else if (insLetter == "B") {
        result = (493.88/(Math.pow(2,4-insNumber)).toFixed(2));
        alert ("Note's Frequency " + result + " HZ" );
    }
