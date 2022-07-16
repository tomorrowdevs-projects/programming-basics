let number = 0;
let sequence = 0;

do{
    number = prompt(' Collatz conjecture, enter a number');
    if(/^[0-9]+$/.test(number) && number > 0){
        sequence = number;
        console.log(sequence);
        while(sequence !== 1){
            if(sequence %2 === 0){
                sequence = Math.floor(sequence/2);
                console.log(sequence);
            }else{
                sequence = sequence * 3 + 1;
                console.log(sequence)
            }
        }
    }else if (number <= 0) break;
    else alert('You were wrong, you have to write one integer number');
}while(number >= 0)
