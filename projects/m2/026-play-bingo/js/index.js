// Imported the functions needed from the previous exercise.
const Card = require("./exe-024-create-a-bingo-card");
const myModule = require("./exe-025-checking-for-a-winning-card");
const bingo = myModule.bingo;
const getRandomCalls = myModule.getRandomCalls;
const getWin = myModule.getWin;


// Declared the `getThousandWins` function that takes the counter of the calls from every game and return the average, the max and the min number of calls for 1000 games.
        function getThousandWins() {

            let min = 0;
            let max = 0;
            let total = 0;
        
            for (e = 0; e < 1000; e++) {
                
                
                const cardOne = new Card;
                const callsOne = getRandomCalls(bingo);
        
                const game = getWin (cardOne, callsOne);
        
                total = total + game;
        
                if (game < min) {
                    min = game;
                } else if (game > max){
                    max = game;
                }
        

            }

            const average = total / 1000;
        
            return `The minimum number of calls is: ${min}\nThe max number of calls is: ${max}\nThe average number of calls is: ${average}`;
        }



console.log(getThousandWins());





