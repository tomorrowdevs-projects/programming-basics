let position = prompt('Inserisci la posizione sulla tastiera');
let letterToNumber = Number(position[0].charCodeAt() - 96);

if(letterToNumber % 2 !== 0 && position[1] % 2 !== 0 || letterToNumber % 2 === 0 && position[1] % 2 === 0) alert('Casella nera');
else alert('Casella bianca');

