// # The Twelve days of Christmas

// The Twelve Days of Christmas is a repetitive song that describes an increasingly long list of gifts sent to one’s true love on each of 12 days. A single gift is sent on the first day. A new gift is added to the collection on each additional day, and then the complete collection is sent. The first three verses of the song are shown below.
// The complete lyrics are available on the Internet.

// *On the first day of Christmas my true love sent to me:
// A partridge in a pear tree.*

// *On the second day of Christmas my true love sent to me:
// Two turtle doves,
// And a partridge in a pear tree.*

// *On the third day of Christmas my true love sent to me: 
// Three French hens,
// Two turtle doves,
// And a partridge in a pear tree.*

// Write a program that displays the complete lyrics for The Twelve Days of Christ- mas. 
// Your program should include a function that displays one verse of the song. 
// It will take the verse number as its only parameter. Then your program should call this function 12 times with integers that increase from 1 to 12.

// Each item that is sent to the recipient in the song should only appear in your program once, with the possible exception of the partridge. It may appear twice if that helps you handle the difference between “A partridge in a pear tree” in the first verse and “And a partridge in a pear tree” in the subsequent verses. 
// You can even import your solution to Exercise 034 to help you complete this exercise.

// / # I dodici giorni di Natale

// // The Twelve Days of Christmas è una canzone ripetitiva che descrive un elenco sempre più lungo di regali inviati al proprio vero amore in ciascuno dei 12 giorni.
//  Il primo giorno viene inviato un solo regalo. Un nuovo regalo viene aggiunto alla raccolta ogni giorno in più, quindi viene inviata la raccolta completa.
//   Di seguito sono riportate le prime tre strofe della canzone.
// // I testi completi sono disponibili su Internet.

// *Il primo giorno di Natale il mio vero amore mi ha inviato:
// Una pernice su un pero.*

// *Il secondo giorno di Natale il mio vero amore mi ha inviato:
// Due tortore,
// E una pernice su un pero.*

// *Il terzo giorno di Natale il mio vero amore mi ha inviato:
// Tre galline francesi,
// Due tortore,
// E una pernice su un pero.*

// Scrivi un programma che visualizzi il testo completo di The Twelve Days of Christmas.
// Il tuo programma dovrebbe includere una funzione che mostri un verso della canzone.
// Prenderà il numero del verso come unico parametro. Quindi il tuo programma dovrebbe chiamare questa funzione 12 volte con numeri interi che aumentano da 1 a 12.

// Ogni elemento inviato al destinatario nella canzone dovrebbe apparire nel tuo programma solo una volta, con la possibile eccezione della pernice. Potrebbe apparire due volte se questo ti aiuta a gestire la differenza tra "Una pernice in un pero" nel primo verso e "E una pernice in un pero" nei versi successivi.
// Puoi anche importare la tua soluzione nell'Esercizio 034 per aiutarti a completare questo esercizio.


let songVerse = {
  first: "A partridge in a pear tree",
  second: "Two turtle doves",
  third: "Three french hens",
  fourth: "Four calling birds",
  fifth: "Five golden rings", 
  sixth: "Six geese a-laying",
  seventh: "Seven swans a-swimming",
  eighth: "Eight maids a-milking",
  ninth: "Nine ladies dancing",
  tenth: "Ten lords a-leaping",
  eleventh: "Eleven pipers piping",
  twelfth: "Twelve drummers drumming"
}

function ordinalsVerse(verse){
    alert(`On the ${verse} day of Christmas, my true love sent to me: ${songVerse[verse]}`)
  
}

for(let verse in songVerse){
  ordinalsVerse(verse)
}