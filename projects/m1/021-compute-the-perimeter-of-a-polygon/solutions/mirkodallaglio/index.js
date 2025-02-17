let firstX = Number(prompt('Enter the first x-coordinate:'));
let firstY = Number(prompt('Enter the first y-coordinate:'));
let otherX = Number(prompt('Enter the second x-coordinate:'));
let otherY = Number(prompt('Enter the second y-coordinate:'));
let x =[];
let y = [];
let side = 0;
let perimeter = 0;

x.push(firstX, otherX);
y.push(firstY, otherY);

do{
    otherX = prompt('Enter the next x-coordinate (blank to quit):');
    if(otherX === ' ') {
        x.push(x[0]);
        y.push(y[0]);
        break;
    }else{
        otherY = Number(prompt('Enter the next y-coordinate:'));
        x.push(Number(otherX));
        y.push(otherY);
    }

}while(otherX !== ' ')

for(i = x.length-1; i >= 1; i--){

    side = Math.sqrt((x[i] - x[i-1])**2 + (y[i] - y[i-1])**2);
    perimeter += side;
};

alert(`The perimeter is ${perimeter}`);


  