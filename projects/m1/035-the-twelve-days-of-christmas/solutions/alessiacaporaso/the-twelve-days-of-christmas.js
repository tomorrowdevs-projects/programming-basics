// the program should include a function that displays one verse of the song
// take the verse number as it's only parameter
// exceptions:  “A partridge in a pear tree” in the first verse and “And a partridge in a pear tree” in the subsequent verses

function completeLyrics(verse) {
  const lyrics = ["And a partridge in a pear tree", "Two turtledoves", "Three French hens", "Four calling birds", "Five gold rings (five golden rings)",
    "Six geese a-laying", "Seven swans a-swimming", "Eight maids a-milking", "Nine ladies dancing", "Ten lords a-leaping", "Eleven pipers piping",
    "Twelve drummers drumming"];
  const ordinalNumber = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh", "Twelfth"];
  const removeElement = verse - 1;

  let song = `On the ${ordinalNumber[removeElement]} day of Christmas, my true love sent to me`;
  let completeSong = '';
  for (let i = removeElement; i >= 0 && i <= 11; i--) {
    if (verse > 1) {
      completeSong += "\n" + lyrics[i]
    } else {
      completeSong += "\n" + "A partridge in a pear tree"
    }
  }
  console.log(song, completeSong);

  if (verse === 12) {
    console.log(lyrics[0]);
  }
}

// call this function 12 times (number between 1 and 12)
for (let i = 1; i <= 12; i++) {
  completeLyrics(i);
}
