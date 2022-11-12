const prompt = require('prompt-sync')();

let position = prompt('Insert valid position: ')
let rowStartBlack = 'aceg'
let rowStartWhite = 'bdfh'

if ((rowStartBlack.split('').includes(position[0]) == true) && (position[1] % 2) == 0) {
    console.log(`The square ${position} is white`);
} else if ((rowStartWhite.split('').includes(position[0]) == true) && (position[1] % 2) == 0) {
    console.log(`The square ${position} is black`);
} else if ((rowStartWhite.split('').includes(position[0]) == true) && (position[1] % 2) != 0) {
    console.log(`The square ${position} is white`);
} else {
    console.log(`The square ${position} is black`);
}