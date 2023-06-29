//Note To Frequency


const userNote = prompt("Please type a note").toUpperCase();


//Match testing returns a boolean 
let validNote = /^[A-G][0-8]$/.test(userNote);

// note let for letters and note num for numbers frquency
let noteLet;
let noteNum;
    
//if the strings are correct it will splited by 2
if (validNote) {
    noteLet = userNote.slice(0,1);
    noteNum = userNote.slice(1,2);
} else {
alert("Error, no valid entry");      
} 

// declare the variable for the frequency
let freq;

//Based of the given info and input from user:
if (noteLet == "C") {

    freq = (261.63/(Math.pow(2, 4-noteNum))).toFixed(2);
    alert(freq + " Hz");
} else if (noteLet == "D") {

    freq = (293.66 / (Math.pow(2, 4-noteNum))).toFixed(2); 
    alert(freq + " Hz");
} else if (noteLet == "E") {

    freq = (329.63/(Math.pow(2, 4-noteNum))).toFixed(2); 
    alert(freq + " Hz");
} else if (noteLet == "F") {

    freq = (349.23/(Math.pow(2, 4-noteNum))).toFixed(2); 
    alert(freq + " Hz");
} else if (noteLet == "G") {

    freq = (392.00/(Math.pow(2, 4-noteNum))).toFixed(2); 
    alert(freq + " Hz");
} else if (noteLet == "A") {

    freq = (440.00/(Math.pow(2, 4-noteNum))).toFixed(2); 
    alert(freq + " Hz");
} else if (noteLet == "B") {
    
    freq = (493.88/(Math.pow(2, 4-noteNum))).toFixed(2); 
    alert(freq + " Hz");
}