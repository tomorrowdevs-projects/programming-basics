const fs = require('fs');
const fileName = 'input.txt'
const data = getArray(fs.readFileSync(fileName, { encoding: 'utf8' }));

// SOLUTION
const password = function(data){
const first = random(data.filter(word => word.length >= 3 && word.length < 7));
const second = random(data.filter(word => first.length + word.length >= 8 && first.length + word.length <= 10 && word.length >= 3))
return capitalize(first) + capitalize(second);
}
console.log('The following password has been generated:', password(data));

// FUNCTIONS
function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getArray(input){
  const array = input.split(/[\r\n]+| /g);
  array.forEach((element, index) => {
    array[index] = element.replace(/^[^A-Za-z]+/g, "").replace(/[^A-Za-z]+$/g, "")
    if(array[index] === ''){
      array.splice(index, 1)
    }
  })
  return array;
}

function capitalize(word){
  return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
}
