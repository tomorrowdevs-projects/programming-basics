///////////////////////////////////////////////////
///////////// Bill print utilities ////////////////
///////////////////////////////////////////////////
    
//private function to generates a horizontal line for the table
// - lineWidth = number, how many characters the line should be long
// - symbol = string, the character to use to form the line
// # return = string
function lineGenerator (lineWidth, symbol) {
    return `+${symbol.padStart(lineWidth-2, symbol)}+`
};

//private function to center a word in a space by adding spaces before and after
// - lineWidth = number, how many characters is the space
// - word = string, the word to write
// # return = string
function centerWord (lineWidth, word) {
    const wordLength = word.length;
    const space = (lineWidth - wordLength) /2;
    return word.padStart(wordLength+space, ' ').padEnd(lineWidth, ' ');
};

//print a ticket table with the numbers, wheels and type of bet
// @ use #genNumber, #lineGenerator, #centerWord function
// - ticketNumber = number, the ticket number to show in the title
// # return = string
function print (ticketNumber, price, type, city, rndNumber) {
    const title = `LOTTO GAME TICKET #${ticketNumber} **€ ${price.reduce((acc, el) => acc + el)}**`;
    const wheel = city.join('  ');
    const types = type.join('  ');
    const prices = price.reduce((string, el, index) => string + centerWord(type[index].length+2, `€${el}`), '');
    const lineWidth = 60;

    return [title, wheel,types, prices, rndNumber].map(el => {
        return `${lineGenerator(lineWidth,'=')}\n|${centerWord(lineWidth-2, el)}|`;

    }).join('\n') + '\n' + lineGenerator(lineWidth,'=') + '\n\n'
};

module.exports = { lineGenerator, centerWord, print }