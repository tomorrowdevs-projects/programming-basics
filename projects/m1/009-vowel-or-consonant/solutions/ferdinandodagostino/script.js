// In this exercise you will create a program that reads a letter of the alphabet from the user. If the user enters a, e, i, o or u then your program should display a message indicating that the entered letter is a vowel. If the user enters y then your program should display a message indicating that sometimes y is a vowel, and sometimes y is a consonant. Otherwise your program should display a message indicating that the letter is a consonant.

const letter = prompt("Inserisci una sola lettera dell'alfabeto").toLowerCase();

if (letter.length > 1) {
  alert('inserisci una sola lettera');
} else if (
  letter == 'a' ||
  letter == 'e' ||
  letter == 'i' ||
  letter == 'o' ||
  letter == 'u'
) {
  alert('Hai inserito una vocale');
} else if (letter == 'y') {
  alert('Hai inserito "y", può essere sia vocale che consonante');
} else {
  alert('Hai inserito una consonante');
}
