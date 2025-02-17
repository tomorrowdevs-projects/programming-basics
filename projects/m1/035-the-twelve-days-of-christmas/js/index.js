
let songVerse = ["A partridge in a pear tree", "Two turtle doves", "Three french hens", "Four calling birds", "Five golden rings", "Six geese a-laying", "Seven swans a-swimming", "Eight maids a-milking", "Nine ladies dancing", "Ten lords a-leaping", "Eleven pipers piping", "Twelve drummers drumming"];

let ordinals = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"];

function showVerse(i){
    alert("On the " + ordinals[i] + " day of Christmas, my true love sent to me \n" + songVerse[i]);
}

for(i = 0; i < songVerse.length; i++){
    showVerse(i);
}