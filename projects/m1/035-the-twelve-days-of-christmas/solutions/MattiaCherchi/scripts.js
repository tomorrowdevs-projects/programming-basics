function twelveDaySong(verseNum) {
    let ordinal = ['firist', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh',
        'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'];

    let gifts = ["A partridge in a pear tree", "Two turtle doves", "Three french hens", "Four calling birds",
        "Five golden rings", "Six geese a-laying", "Seven swans a-swimming", "Eight maids a-milking",
        "Nine ladies dancing", "Ten lords a-leaping", "Eleven pipers piping", "Twelve drummers drumming"];


    let verse = `on the ${ordinal[verseNum]} day of Christmas my true love sent to me: \n`

    for (let i = verseNum; i >= 0; i--) {

        verse += gifts[i] + '\n';
    }

    return verse


}

for (let n = 0; n <= 11; n++) {
    console.log(twelveDaySong(n) + '\n')
}

