
// Function to create an array from a given range of numbers.
function rangeOfNumbers  (start, stop, step = 1)  {
    const length = Math.ceil((stop - start) / step);
    return Array.from({length}, (_, i) => (i * step) + start);
};


// Declared the five arrays that will be shuffled for the card creation.
const array1to15 = rangeOfNumbers (1, 16);
const array16to30 = rangeOfNumbers (16, 31);
const array31to45 = rangeOfNumbers (31, 46);
const array46to60 = rangeOfNumbers (46, 61);
const array61to75 = rangeOfNumbers (61, 76);



function shuffleArray (numbers) {

};


// Used a constructor function to dinamically create the object.
function BingoCard () {
    this.B = array1to15.sort(() => .5 - Math.random()).slice(0, 5);
    this.I = array16to30.sort(() => .5 - Math.random()).slice(0, 5);
    this.N = array31to45.sort(() => .5 - Math.random()).slice(0, 5);
    this.G = array46to60.sort(() => .5 - Math.random()).slice(0, 5);
    this.O = array61to75.sort(() => .5 - Math.random()).slice(0, 5);
    }

    const card = new BingoCard;



// Use the showcard function to show the card object in the console like a real bingo card.
    function showCard (card) {
        
        let outputString = "";

        for (i = 0; i < Object.keys(card).length; i++) {
            outputString += Object.keys(card)[i] + " => " + Object.values(card)[i] + "\n"; 
        }
        
        console.log(outputString);
        
    };
    


module.exports = BingoCard;