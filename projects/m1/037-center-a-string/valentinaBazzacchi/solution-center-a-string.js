function centerString(s, w) {
    
    let numOfSpaces;
    let spaces = "";
    
    if (s.length >= w) {
    return s;
    
    } else if (s.length < w) {
    numOfSpaces = Math.floor((s.length - w) / 2); 

        for (let i = 0; i > numOfSpaces; i--) {
        spaces += " ";  
        }// end for loop

    return spaces + s;
    } //end else if condition
} // end function


alert(centerString("Ciao sono una stringa che deve stare in centro!", 80))
alert(centerString("Ciao sono una stringa che deve stare in centro ma sono troppo lunga quindi vado a capo!", 80))