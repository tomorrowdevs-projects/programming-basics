/*The Twelve Days of Christmas is a repetitive song that describes an increasingly long list of gifts sent to one’s true love on each of 12 days.
A single gift is sent on the first day. A new gift is added to the collection on each additional day, and then the complete collection is sent. 
The first three verses of the song are shown below. The complete lyrics are available on the Internet.

On the first day of Christmas my true love sent to me: A partridge in a pear tree.

On the second day of Christmas my true love sent to me: Two turtle doves, And a partridge in a pear tree.

On the third day of Christmas my true love sent to me: Three French hens, Two turtle doves, And a partridge in a pear tree.

Write a program that displays the complete lyrics for The Twelve Days of Christ- mas. Your program should include a function that displays one verse of the song. It will take the verse number as its only parameter. Then your program should call this function 12 times with integers that increase from 1 to 12.

Each item that is sent to the recipient in the song should only appear in your program once, with the possible exception of the partridge. It may appear twice if that helps you handle the difference between “A partridge in a pear tree” in the first verse and “And a partridge in a pear tree” in the subsequent verses. You can even import your solution to Exercise 034 to help you complete this exercise. */

// Fuction for ordinal number day
function getOrdinalNumber(num) {
    const ordinalNumbers = ["first", "Second", "Third","Fourth", "Fifth", "Sixth", "Seventh", "Eigth", "Ninth", "Tenth", "Eleveth", "Twelfth"];
  
    if (num <= 0 || num > 12) {
      num = "";
      return num;
    } else {
      num = ordinalNumbers[num -1];
      return num;
    }
}

// Function for the list present for the day
// Key = day Value = String verse. 
function getPresent(day) {
  
  const present = {1 : "A partridge in a pear tree.", 2 : "Two turtle doves,", 3 : "Three french hens,", 4 : "Four calling birds,", 5 : "Five golden rings,", 6 : "Six geese a-laying,", 7 : "Seven swans a-swimming,", 8 : "Eight maids a-milking,", 9 : "Nine ladies dancing,", 10 : "Ten lords a-leaping,", 11 : "Eleven pipers piping,", 12 : "Twelve drummers drumming,"}

  const listPresent = [];
  
  for (i = 1; i <= day; i++) {
    listPresent.unshift(present[i])
  }
  return listPresent.join(" ");
}


const userVerse = Number(prompt(`Enter the number (1-12) of the verse you would like to hear from the song "The Twelve Days of Christmas"\n`))

  alert(`On the ${getOrdinalNumber(userVerse)} day of Christmas my true love sent to me: ${getPresent(userVerse)}`)

const check = confirm("\nDo you want to sing the whole song with me?\n")

// Cycle to return the whole song
if (check === true) {
  
  for (i = 1; i <= 12;) {
    alert(`On the ${getOrdinalNumber(i)} day of Christmas my true love sent to me: ${getPresent(i)}\n`);
  }
} else {
  alert("Oh, no... It will be for the next time")
}