// what color is that square

let squareInput = prompt('Enter the chessboard coordinate you would like to know the color: ', '');

let letters = ['a','b','c','d','e','f','g','h'];
let numbers = [1 ,2, 3, 4, 5, 6, 7, 8];

let color = 'black';

for (c=0 ; c<numbers.length; c++) {
    
    for (r=0; r<letters.length ; r++) {
            
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