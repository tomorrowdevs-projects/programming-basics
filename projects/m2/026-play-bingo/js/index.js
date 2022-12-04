
        const bingo = {
            B: [...Array(15 - 1 + 1).keys()].map(x => x + 1),
            I: [...Array(30 - 16 + 1).keys()].map(x => x + 16),
            N: [...Array(45 - 31 + 1).keys()].map(x => x + 31),
            G: [...Array(60 - 46 + 1).keys()].map(x => x + 46),
            O: [...Array(75 - 61 + 1).keys()].map(x => x + 61),
        }; 




        function createCard () {

            function BingoCard () {
            this.B = Array.from({length: 5}, () => Math.floor(Math.random() * (15 - 1 + 1)) + 1);
            this.I = Array.from({length: 5}, () => Math.floor(Math.random() * (30 - 16 + 1)) + 16);
            this.N = Array.from({length: 5}, () => Math.floor(Math.random() * (45 - 31 + 1)) + 31);
            this.G = Array.from({length: 5}, () => Math.floor(Math.random() * (60 - 46 + 1)) + 46);
            this.O = Array.from({length: 5}, () => Math.floor(Math.random() * (75 - 61 + 1)) + 61);
            }

            let card = new BingoCard();

            return card;
        };




        function getRandomArray (bingo) {

            let calls = [];

            for (i = 0; i < Object.keys(bingo).length; i++){

                for (j = 0; j < Object.values(bingo)[i].length; j++){
                    calls.push(Object.keys(bingo)[i].toString() + Object.values(bingo)[i][j]);
                }
            }

            for (let i = calls.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [calls[i], calls[j]] = [calls[j], calls[i]];
            };

            return calls;

        }





        function getWin (card, calls){
            
            let counter = 0;

                for (k = 0; k < calls.length; k++){
                    
                    let winVerticalOne =  Object.values(card)[0][0] + Object.values(card)[0][1] + Object.values(card)[0][2] + Object.values(card)[0][3] + Object.values(card)[0][4];
                    let winVerticalTwo = Object.values(card)[1][0] + Object.values(card)[1][1] + Object.values(card)[1][2] + Object.values(card)[1][3] + Object.values(card)[1][4];
                    let winVerticalThree = Object.values(card)[2][0] + Object.values(card)[2][1] + Object.values(card)[2][2] + Object.values(card)[2][3] + Object.values(card)[2][4];
                    let winVerticalFour = Object.values(card)[3][0] + Object.values(card)[3][1] + Object.values(card)[3][2] + Object.values(card)[3][3] + Object.values(card)[3][4];
                    let winVerticalFive = Object.values(card)[4][0] + Object.values(card)[4][1] + Object.values(card)[4][2] + Object.values(card)[4][3] + Object.values(card)[4][4];

                    let winHorizontalOne = Object.values(card)[0][0] + Object.values(card)[1][0] + Object.values(card)[2][0] + Object.values(card)[3][0] + Object.values(card)[4][0];
                    let winHorizontalTwo = Object.values(card)[0][1] + Object.values(card)[1][1] + Object.values(card)[2][1] + Object.values(card)[3][1] + Object.values(card)[4][1];
                    let winHorizontalThree = Object.values(card)[0][2] + Object.values(card)[1][2] + Object.values(card)[2][2] + Object.values(card)[3][2] + Object.values(card)[4][2];
                    let winHorizontalFour = Object.values(card)[0][3] + Object.values(card)[1][3] + Object.values(card)[2][3] + Object.values(card)[3][3] + Object.values(card)[4][3];
                    let winHorizontalFive = Object.values(card)[0][4] + Object.values(card)[1][4] + Object.values(card)[2][4] + Object.values(card)[3][4] + Object.values(card)[4][4];

                    let winDiagonalOne = Object.values(card)[0][4] + Object.values(card)[1][3] + Object.values(card)[2][2] + Object.values(card)[3][1] + Object.values(card)[4][0];
                    let winDiagonalTwo = Object.values(card)[4][0] + Object.values(card)[3][1] + Object.values(card)[2][2] + Object.values(card)[1][3] + Object.values(card)[0][4];



                        if (winVerticalOne === 0 || winVerticalTwo === 0 || winVerticalThree === 0 || winVerticalFour === 0 || winVerticalFive === 0 || winHorizontalOne === 0 || winHorizontalTwo === 0 || winHorizontalThree === 0 || winHorizontalFour === 0 || winHorizontalFive === 0 || winDiagonalOne === 0 || winDiagonalTwo === 0) {break;}

                            for (i = 0; i < Object.keys(card).length; i++){

                                for(j = 0; j < Object.values(card)[i].length; j++){

                                    if (calls[k] === (Object.keys(card)[i] + Object.values(card)[i][j])){
                                        Object.values(card)[i][j] = 0;
                                    }

                                }
                                        
                            }

                            counter ++;
                        }
                
            return counter;
        }




        function getThousandWins() {

            let min = 0;
            let max = 0;
            let total = 0;
        
            for (i = 0; i < 1000; i++) {
        
                let cardOne = createCard();
                let callsOne = getRandomArray (bingo);
        
                let game = getWin (cardOne, callsOne);
        
                total = total + game;
        
                if (game < min) {
                    min = game;
                } else if (game > max){
                    max = game;
                }
        

            }

            let average = total / 1000;
        
            return "The minimum number of calls is: " + min + "!\nThe max number of calls is: " + max + "\nThe average number of calls is: " + average;
        }


alert(getThousandWins());






