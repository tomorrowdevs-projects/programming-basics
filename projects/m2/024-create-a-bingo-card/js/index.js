function BingoCard () {
    this.B = Array.from({length: 5}, () => Math.floor(Math.random() * (15 - 1 + 1)) + 1);
    this.I = Array.from({length: 5}, () => Math.floor(Math.random() * (30 - 16 + 1)) + 16);
    this.N = Array.from({length: 5}, () => Math.floor(Math.random() * (45 - 31 + 1)) + 31);
    this.G = Array.from({length: 5}, () => Math.floor(Math.random() * (60 - 46 + 1)) + 46);
    this.O = Array.from({length: 5}, () => Math.floor(Math.random() * (75 - 61 + 1)) + 61);
    }

    const card = new BingoCard();


    function showCard (card) {
        
        let outputString = "";

        for (i = 0; i < Object.keys(card).length; i++) {
            outputString += Object.keys(card)[i] + " => " + Object.values(card)[i] + "\n"; 
        }
        return outputString;
        
    }

alert("Here is your randomly generated Bingo card: \n\n" + showCard(card));