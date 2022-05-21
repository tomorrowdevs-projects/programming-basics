// The Twelve Days of Christmas is a repetitive song that describes an increasingly long list of gifts sent to one’s true love on each of 12 days. A single gift is sent on the first day. A new gift is added to the collection on each additional day, and then the complete collection is sent. The first three verses of the song are shown below. The complete lyrics are available on the Internet.

// On the first day of Christmas my true love sent to me: A partridge in a pear tree.

// On the second day of Christmas my true love sent to me: Two turtle doves, And a partridge in a pear tree.

// On the third day of Christmas my true love sent to me: Three French hens, Two turtle doves, And a partridge in a pear tree.

// Write a program that displays the complete lyrics for The Twelve Days of Christ- mas. Your program should include a function that displays one verse of the song. It will take the verse number as its only parameter. Then your program should call this function 12 times with integers that increase from 1 to 12.

// Each item that is sent to the recipient in the song should only appear in your program once, with the possible exception of the partridge. It may appear twice if that helps you handle the difference between “A partridge in a pear tree” in the first verse and “And a partridge in a pear tree” in the subsequent verses. You can even import your solution to Exercise 034 to help you complete this exercise.

const daysOfChristmas = [
  'First',
  'Second',
  'Third',
  'Fourth',
  'Fifth',
  'Sixth',
  'Seventh',
  'Eighth',
  ' Ninth',
  'Tenth',
  'Eleventh',
  'Twelfth',
];

const lyricsPieces = [
  'A Partridge in a Pear Tree',
  '2 Turtle Doves',
  '3 French Hens',
  '4 Calling Birds',
  '5 Golden Rings',
  '6 Geese a Laying',
  '7 Swans a Swimming',
  '8 Maids a Milking',
  '9 Ladies Dancing',
  '10 Lords a Leaping',
  '11 Pipers Piping',
  '12 Drummers Drumming',
];

let presents = '';

const getUserVerse = prompt('Inserisci numero verso da 1 a 12 ');

function printVerse(verse) {
  for (i = 0; i <= daysOfChristmas.length; i++) {
    if (i == 0) {
      sep = '.';
    } else if (i == 1) {
      sep = ' and ';
    } else {
      sep = ', ';
    }
    presents = lyricsPieces[i] + sep + presents;
    const verseSong = `On the ${daysOfChristmas[i]} my true love gave to me ${presents}`;
    console.log(verseSong);
  }
  const userVerse = `On the ${daysOfChristmas[verse]} my true love gave to me ${presents}`;
  console.log(userVerse);
}

printVerse(getUserVerse - 1);
// const test = giftsPerDay.join(',');
// console.log(giftsPerDay);
// console.log(test);
// const userInput = prompt('Inserisci il numero del verso');

// const fullVerse = [];

// function displayVerse(verseNumber) {
//   let versePart1 =
//     'On the ' +
//     daysOfChristmas[verseNumber - 1] +
//     ' day of Christmas my true love sent to me: \n ' +
//     lyricsPieces[verseNumber - 1];

//   if (verseNumber > 1) {
//     versePart1 =
//       'On the ' +
//       daysOfChristmas[verseNumber - 1] +
//       ' day of Christmas my true love sent to me: \n ' +
//       lyricsPieces[verseNumber - 1] +
//       lyricsPieces[verseNumber - 2];
//     (' and A Partridge in a Pear Tree');
//   }

//   console.log(versePart1);
// }
// displayVerse(userInput);

// for (let index = 1; index <= 12; index++) {
//   const testVerse = lyricsPieces[index] + lyricsPieces[index - 1];
//   console.log(testVerse);
//   displayVerse(index);
// }
