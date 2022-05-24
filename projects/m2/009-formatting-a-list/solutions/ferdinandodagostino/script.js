// When writing out a list of items in English, one normally separates the items with commas. In addition, the word “and” is normally included before the last item, unless the list only contains one item.

// Consider the following four lists: apples apples and oranges apples, oranges and bananas apples, oranges, bananas and lemons

// Write a function that takes a list of strings as its only parameter. Your function should return a string that contains all of the items in the list, formatted in the manner described previously, as its only result. While the examples shown previously only include lists containing four elements or less, your function should behave correctly for lists of any length. Include a main program that reads several items from the user, formats them by calling your function, and then displays the result returned by the function.
const userString = prompt('Inserisci una lista di stringhe');

function sanitizeString(string) {
  const splitString = string.split(' ');

  let result = splitString[0];
  for (let i = 1; i < splitString.length; i++) {
    if (i < splitString.length - 1) {
      result += ', ' + splitString[i];
    } else {
      result += ' and ' + splitString[i];
    }
  }
  console.log(result);
}

sanitizeString(userString);
