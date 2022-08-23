let phrase = prompt('Enter a phrase');

//function determines the number of unique characters in a string, input string, output array[0] unic char , arr[1] the number of unics char
function stringToUnicChar (string){
    const result = [];

    for(char of string){
        if (!result.includes(char)) result.push(char);
    };

    return [result, result.length];
}

alert(`Your phrase:  ${phrase}\n\nUnic char:  ${stringToUnicChar(phrase)[0].join(' - ')}\n\nNumber of unics char:  ${stringToUnicChar(phrase)[1]}`);