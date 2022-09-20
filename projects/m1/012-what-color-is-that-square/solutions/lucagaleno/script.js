// what color is that square

let squareInput = prompt('Enter the chessboard coordinate you would like to know the color: ', '');

let letters = ['a','b','c','d','e','f','g','h'];
let numbers = [1 ,2, 3, 4, 5, 6, 7, 8];

let color = 'black';

for (i=0 ; c<letters.length; i++) {
    
    for (r=0; r<numbers.length ; r++) {

        if ((color === 'black')&&(letters[r]!='a')){
            color ='white';
            
        } else if ((color === 'white')&&(letters[r]!='a')) {
            color = 'black';
            
        } else if ((color==='black')&&(letters[r]='a')) {
            color = 'black';
            
        } else if((color==='white')&&(letters[r]='a')) {
            color = 'white';
            
        };
              
        if ((letters[r]+ numbers[c])===squareInput){
 
            console.log('The choosen square '+ squareInput + ' is ' + color);
        }
    }
}

// What color is that square 2 solution without limits of how big the square can be.

/*

let squareInput2 = prompt('Enter the multidimensional chessboard coordinate you would like to know the color: ', ''); //any characters + any integer es: az19

let letterInput = squareInput2.match(/[a-z]/gi);
let numberInput = squareInput2.match(/(\d+)/gi);

let letterNumberCombined = "";

letterInput.forEach((element, index)=> {
    letterNumberCombined = letterNumberCombined + (letterInput[index].charCodeAt(0)-96).toString();
});

let letterNumbered = parseInt(letterNumberCombined);

console.log('letter '+ letterInput);
console.info('letter numbered '+ letterNumbered);
console.log('number ' + numberInput);

function isDisp(num) {
    let solution = num % 2;
    if (solution === 0){
        return false;
    }else if (solution === 1){
        return true;
    }else {
        alert('Attention this is not an integer')
    };
};

if (isDisp(letterNumbered) === true) {
    let firstBlack = true;
} else {
    let firstWhite = true;
};
    
if ((firstWhite === true) && (isDisp(numberInput) === true)) {
    console.log("The square is white");
    } else if ((firstBlack === true) && (isDisp(numberInput) === false)) {
    console.log("The square is white!");
    } else {
    console.log("The square is black!")
};

*/
