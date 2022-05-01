// Positions on a chess board are identified by a letter and a number. The letter identifies the column, while the number identifies the row, as shown below: Write a program that reads a position from the user. Use an if statement to determine if the column begins with a black square or a white square. Then use modular arithmetic to report the color of the square in that row. For example, if the user enters a1 then your program should report that the square is black. If the user enters d5 then your program should report that the square is white. Your program may assume that a valid position will always be entered. It does not need to perform any error checking.

const position = prompt('Inserisci la posizione').toLowerCase();

const letter = position.slice(0, 1);
const number = position.slice(1);

console.log(letter, number);
if (letter == 'a' || letter == 'c' || letter == 'e' || letter == 'g')
  if (number % 2 == 0) {
    alert(`Sei in posizione ${position}, il colore della casella è BIANCO`);
  } else {
    alert(`Sei in posizione ${position}, il colore della casella è NERO`);
  }
else if (letter == 'b' || letter == 'd' || letter == 'f' || letter == 'h')
  if (number % 2 == 0) {
    alert(`Sei in posizione ${position}, il colore della casella è NERO`);
  } else
    alert(`Sei in posizione ${position}, il colore della casella è BIANCO`);
