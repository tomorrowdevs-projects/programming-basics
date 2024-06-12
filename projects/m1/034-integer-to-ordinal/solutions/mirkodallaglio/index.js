// Your main program should only run when your file has not been imported into another program.  ???? i don't understand

function numToOrdinal (num){
    if(num === 1) return '1st';
    else if (num === 2) return '2nd';
    else if (num === 3) return '3rd';
    else if (num > 3 && num <= 12) return num + 'th';
    else return '';
}

for(i = 1; i <= 12; i++){
    console.log(`${i} ==> ${numToOrdinal(i)}`)
}