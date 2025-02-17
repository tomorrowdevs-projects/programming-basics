
let maxInt = Math.round(Math.random()*100);
console.log(maxInt + ' <== first maximum value');

let update = 0;
let thisInt;

for(let i = 0; i <= 100; i++){
  thisInt =  Math.round(Math.random()*100);
  if(thisInt > maxInt){
    maxInt = thisInt;
    update += 1;
    console.log(thisInt + ' <== update');

  }else {
    console.log(thisInt)
  }
}

alert(`The maximum value found was: ${maxInt}
\nThe maximum value was updated ${update} times
\nVIEW THE CONSOLE TO CONSULT THE LIST OF NUMBERS`);

console.log('The maximum value found was: ' + maxInt);
console.log('The maximum value was updated: ' + update + ' times');