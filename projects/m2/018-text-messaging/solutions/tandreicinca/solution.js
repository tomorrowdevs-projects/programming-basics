// I have to write a program that display the key presses needed for a message entered by a user, as the old phones. 1. I have to write a function that for specific letter, it will return me a specific key 2. I have to ask an input from the user, I will remove from the input the characters that are not in my function.

function oldPhone(input) {
    const keysPhone = {                                    // I create an Object with keys that map to characters
        '1':['.',',','?','!',':'],
        '2':['a','b','c'],
        '3':['d','e','f'],
        '4':['g','h','i'],
        '5':['j','k','l'],
        '6':['m','n','o'],
        '7':['p','q','r','s'],
        '8':['t','u','v'],
        '9':['w','y','x','z'],
        '0':[' '] 
    }
    
    const regex = /["#$%&()*+,-/;<=>@[\]^_`{|}~]/g;         // I remove the punctuation mark that are not in my object and I formatize the string to lower case
    const result = input.replace(regex, '');
    let lowText = result.toLowerCase();
    console.log(lowText);
    let output = [];
    for (x of lowText) {
        for (i = 0; i < 10; i++) {
            for (j = 0; j < 6; j++) {
                console.log(Object.values(keysPhone)[i][j])
                if (Object.values(keysPhone)[i][j] == x) {
                    for (y = 0; y <= j; y++)
                        output.push(Object.keys(keysPhone)[i]);
                }
                console.log(Object.keys(keysPhone)[i])
            }
            
        }
    }
    return output.join('')
}

let text = prompt('Write something, I am going to translate it in cryptic text')
alert(oldPhone(text))