
// i create my bingo card using a constructor with an array.from method using a math.random to generate every number;
function BingoCard () {
    this.B = Array.from({length: 5}, () => Math.floor((Math.random() * (15 - 1 + 1)) + 1));
    this.I = Array.from({length: 5}, () => Math.floor(Math.random() * (30 - 16 + 1)) + 16);
    this.N = Array.from({length: 5}, () => Math.floor(Math.random() * (45 - 31 + 1)) + 31);
    this.G = Array.from({length: 5}, () => Math.floor(Math.random() * (60 - 46 + 1)) + 46);
    this.O = Array.from({length: 5}, () => Math.floor(Math.random() * (75 - 61 + 1)) + 61);
}

//i declare three different cards;
let cardOne = new BingoCard();
let cardTwo = new BingoCard();
let cardThree = new BingoCard();


//the i declare three different arrays to test the "win" function. the first one (winHorizontal) is to test an horizontal line. the second one (winVertical) is to test a vertical line, the third one (winDiagonal) to test an horizontal line. while the last one is to test a random pick of numebrs.
let winHorizontal = [Object.values(cardOne)[0][0], Object.values(cardOne)[1][0], Object.values(cardOne)[2][0], Object.values(cardOne)[3][0], Object.values(cardOne)[4][0]];

let winVertical = Object.values(cardTwo)[0];

let winDiagonal = [Object.values(cardThree)[0][4], Object.values(cardThree)[1][3], Object.values(cardThree)[2][2], Object.values(cardThree)[3][1], Object.values(cardThree)[4][0]];

let winRandom = Array.from({length: 5}, () => Math.floor(Math.random() * (75 - 1 + 1)) + 1);



//then i declare my  main function "getLine" with two parameters. a bingo card and a set of array containing some numbers picks from the 4 i've declared.
    function getLine(card, winLine) {
        

//to check if a number is present in one of the five keys (B,I,N,G,O) of the card we iterate the elements of the set array (winLine) over every value present in the card. if there's a match the value will be set to "0", to mark it as "called".
        for (i = 0; i < Object.keys(card).length; i ++ ) {

                for(j = 0; j < Object.values(card).length; j++){

                    for (k = 0; k < winLine.length; k++) {

                        if(winLine[k] === (Object.values(card)[i][j])) {
                        Object.values(card)[i][j] = 0;

                        }
                    }
                }
            }


//once we have our card marked down i delcare two strings (keyString and outputString) that will be filled with the keys and the values of the modified card to create the "table" that represent  the bingo card. 
        let keysString = "";
        let outputString = "";

        for (i = 0; i < Object.keys(card).length; i++){
            keysString +=  "     " + Object.keys(card)[i].toString() + "     ";
        }

        for (i = 0; i < Object.keys(card).length; i++) {

            for(j = 0; j < 5; j++){
            outputString += "     " + Object.values(card)[j][i] + "     "; 
            }
            outputString += "\n"
        }



        return keysString + "\n" + outputString;
    }


alert(getLine(cardOne, winRandom));

