let note = prompt('Writhe a note to convert to frequency').toUpperCase();

let correctNote = /^[A-G][0-8]$/.test(note);

let letterNote;
let numberNote;


if(correctNote){
   letterNote = note[0];
   numberNote = note[1];
}else{
  alert('Error! Please enter a note')
};

let frequency;

switch(letterNote){
  case 'C':
    frequency = (261.63/(Math.pow(2, 4-numberNote))).toFixed(2);
    alert(`The frequency is ${frequency} Hz`);
    break;

  case 'D':
    frequency = (293.66/(Math.pow(2, 4-numberNote))).toFixed(2);
    alert(`The frequency is ${frequency} Hz`);
    break;

    case 'E':
    frequency = (329.63/(Math.pow(2, 4-numberNote))).toFixed(2);
    alert(`The frequency is ${frequency} Hz`);
    break;

    case 'F':
    frequency = (349.23/(Math.pow(2, 4-numberNote))).toFixed(2);
    alert(`The frequency is ${frequency} Hz`);
    break;

    case 'G':
      frequency = (392.00/(Math.pow(2, 4-numberNote))).toFixed(2);
      alert(`The frequency is ${frequency} Hz`);
      break;

      case 'A':
      frequency = (440.00/(Math.pow(2, 4-numberNote))).toFixed(2);
      alert(`The frequency is ${frequency} Hz`);
      break;

      case 'B':
        frequency = (493.88/(Math.pow(2, 4-numberNote))).toFixed(2);
        alert(`The frequency is ${frequency} Hz`);
        break;
}