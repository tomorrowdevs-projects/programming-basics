/*Create a program that determines and displays the number of unique characters in a string entered by the user.

For example, Hello, World! has 10 unique characters while zzz has only one unique character.

Use a dictionary or set to solve this problem.*/

const userInput = prompt("Enter a text to see how many unique characters it contains:");

const uniqueCharacters = new Set(userInput);

alert(uniqueCharacters.size)
