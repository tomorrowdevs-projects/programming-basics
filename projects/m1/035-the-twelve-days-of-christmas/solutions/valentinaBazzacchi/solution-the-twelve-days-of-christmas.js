function getSongVerse(number) { // verseNumber[number-1] and items[number-1] allow to select the different elements through the for loop 
    let verseNumber = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"];
    let versePart1 = "On the " + verseNumber[number-1] + " day of Christmas my true love sent to me: \n"
    items = ["And a partridge in a pear tree.", "Two turtle doves,", "Three french hens,", "Four calling birds,", "Five golden rings,", "Six geese a-laying,", 
    "Seven swans a-swimming,", "Eight maids a-milking,", "Nine ladies dancing,", "Ten lords a-leaping,", "Eleven pipers piping,", "Twelve drummers drumming,"];
    items = items[number-1];
    // Condition for handling the exception of verse number 1
    if (number == 1) { 
        return versePart1 + "A partridge in a pear tree.\n";
    } else {
        return versePart1 + items + "\n";
    }
}     
// The following variables are declared in the global scope because they will be used in code outside the function
let items;
let prevItems = [];
let song = "";
// The iterator "i" become the argument of the function getSongVerse(number).
for (let i = 1; i < 13; i++) {
    prevItems.unshift(items);
    song += (getSongVerse(i) + prevItems.join("\n")) + "\n";
}

console.log(song);

 /* 
 When i = 1 and before the function call (code line n. 20), items = undefined so the array prevItems remains empty. 
 --> After the function call (code line 21), items become [0] but the program follow the if condition (number == 1) within the function 
 and return VersePart1 (with verseNumber[0]) + the string defined as an exception "A partridge in a pear tree.\n". 
 The array prevItems is still empty and is not displayed on the screen! 
 
 When i = 2 the current value of items is [0] and it is added to the beginning of the array prevItems (at the line code n. 20),
 --> After the function call (code line 21), it returns VersePart1 (with verseNumber[1]) + items become [1] + prevItem which now contains item[0].
 
 When i = 3 the current value of items is [1] and it is added to the beginning of the array prevItems[items [1], items[0]] (at the line code n. 20),
--> After the function call (code line 21), it returns VersePart1 (with verseNumber[2]) + items become [2] + prevItem which now contains items [1], item[0].
 
And so on until i = 12 ...
 */