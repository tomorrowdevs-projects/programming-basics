for(let i = 0; i<12; i++) {
  showTextSong(i);
}

function showTextSong(i){

  const ordinalNumber = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh", "Twelfth"];

  const lyrics = ["And a partridge in a pear tree", "Two turtle-doves", "Three French hens", "Four calling birds", "Five gold rings (five golden rings)", "Six geese a-laying", "Seven swans a-swimming", "Eight maids a-milking", "Nine ladies dancing", "Ten lords a-leaping", "Eleven pipers piping", "Twelve drummers drumming"];

  const song = "On the " + ordinalNumber[i] + " day of Christmas,\nMy true love sent to me";
  
  let completeSong = "";

  for(let y = 0; y <= i; y++){
    if(i == 0){
      completeSong += "\nA partridge in a pear tree.";
    } else {
      completeSong = "\n" + lyrics[y] + completeSong;
    }
  }

  if(i == 11){
    completeSong += "\n" + lyrics[0];
  }

  console.log(song, completeSong);

}

