const input = prompt('Inserisci un espressione matematica');

//splitto tenendomi il delimitatore usando  i lookarounds (trovato risorsa su https://medium.com/@shemar.gordon32/how-to-split-and-keep-the-delimiter-s-d433fb697c65)
const splitInput = input.split(/(?=[*+-/^()])|(?<=[*+-/^()])/g);

console.log(splitInput);
