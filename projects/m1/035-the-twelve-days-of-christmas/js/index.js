/** Variables and constants of numeric and string types
 * @variable { day_VerseNumber }         --> declared globally because used both inside the @function { twelveDaysChristmas } as an @array of ordinary days and externally
 * @variable { gift_DayChristmas }       --> declared globally because it is used both inside the @function { twelveDaysChristmas } as the @array { gift_DayChristmas } of ordinary days and externally
 * @const { lyrics_Complete }            --> empty @array where the list of gifts is stored to be inserted with the @metod uniscift()
 * @variable { lyrics_Complete_Display } --> complete song display
*/
let day_VerseNumber;
let gift_DayChristmas;
const lyrics_Complete = [];
let lyrics_Complete_Display = "";

/** 
* @function twelveDaysChristmas 
* @param {ParamDataTypeHere}                  --> ordinary day verse number
* @ @array {day_VerseNumber}                  --> contains the 12 ordinal days
* @array {gift_DayChristmas}                  --> contains the list of 12 gifts
* @variable {day_VerseNumber}                 --> allow to select the different elements through the for loop 
* @variable {gift_DayChristmas}               --> allow to select the different elements through the for loop 
* @variable {verses_LineOne}                  --> variable where the first line of the song is stored + the variable @variable {day_VerseNumber}
* @variable {versesLineOne_giftDayChristmas}  --> store @variable {verses_LineOne} + @variable {gift_DayChristmas} and then return them with the @return
* @return {versesLineOne_giftDayChristmas}    --> returns the first line of the song with its relative gift according to the day
*/
function twelveDaysChristmas(numberDayVerse) {
    day_VerseNumber = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh", "Twelfth"];
    gift_DayChristmas = ["And a partridge in a pear tree.", "Two turtle doves", "Three french hens", "Four calling birds", "Five golden rings", "Six geese a-laying", "Seven swans a-swimming", "Eight maids a-milking",
        "Nine ladies dancing", "Ten lords a-leaping", "Eleven pipers piping", "Twelve drummers drumming"];
    day_VerseNumber = day_VerseNumber[numberDayVerse - 1];
    gift_DayChristmas = gift_DayChristmas[numberDayVerse - 1];
    verses_LineOne = "On the " + day_VerseNumber + " day of Christmas my true love sent to me ";
    versesLineOne_giftDayChristmas = "\n" + verses_LineOne + "\n" + gift_DayChristmas + "\n";
    return versesLineOne_giftDayChristmas;
}

/** 
 * @for Loop to display the function 12 times
 * @metod {unshift()} to insert at each increnent the element will always be the first element in the gift list 
 * @variable in which the call to the function @function {twelveDaysChristmas} + @array {lyrics_Complete} is stored for displaying the complete lyrics of the song
 * @display console.log() complete song
*/
for (let counter_Verse = 1; counter_Verse <= 12; counter_Verse++) {
    lyrics_Complete.unshift(gift_DayChristmas);
    lyrics_Complete_Display += twelveDaysChristmas(counter_Verse) + lyrics_Complete.join("\n");
}
console.log("THE TWELVE DAYS OF CHISTMAS\n" + lyrics_Complete_Display);