const userNote=prompt('insert a note with letter a number from 0 to 8').toUpperCase();

const letter=userNote.slice(0,1);
const number=+userNote.slice(1,2);
let frequency;
switch (letter)  {
  case 'C':
    frequency=(261.63/(Math.pow(2, 4-number))).toFixed(2);
      alert(frequency+'Hz');
    break;
         
  case 'D':
    frequency=(293.66/(Math.pow(2, 4-number))).toFixed(2);
      alert(frequency+'Hz');
    break;
  
  case 'E':
    frequency=(329.63/(Math.pow(2, 4-number))).toFixed(2);
      alert(frequency+'Hz');
    break;
  
  case 'F':
    frequency=(349.23/(Math.pow(2, 4-number))).toFixed(2);
      alert(frequency+'Hz');
    break;
  
  case 'G':
    frequency=(392.00/(Math.pow(2, 4-number))).toFixed(2);
      alert(frequency+'Hz');
    break;
  
  case 'A':
    frequency=(440.00/(Math.pow(2, 4-number))).toFixed(2);
      alert(frequency+'Hz');
    break;
  
  case 'B':
    frequency=(493.88/(Math.pow(2, 4-number))).toFixed(2);
      alert(frequency+'Hz');
}
