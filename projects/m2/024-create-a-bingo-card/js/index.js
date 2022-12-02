
//i use the constructor function "BingoCard" to randomly generate numbers for the various Bingo keys.
    function BingoCard () {
        this.B = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
        this.I = Math.floor(Math.random() * (30 - 16 + 1)) + 16;
        this.N = Math.floor(Math.random() * (45 - 31 + 1)) + 31;
        this.G = Math.floor(Math.random() * (60 - 46 + 1)) + 46;
        this.O = Math.floor(Math.random() * (75 - 61 + 1)) + 61;
    }

let card = new BingoCard();

//then i create a string nicely formatted iterating over every keys of the object "card".
    function showCard (card) {
        
        let outputString = "";

        for (i = 0; i < Object.keys(card).length; i++) {
            outputString += Object.keys(card)[i] + " => " + Object.values(card)[i] + "\n"; 
        }
        return outputString;
        
    }

alert("Here is your randomly generated Bingo card: \n\n" + showCard(card));