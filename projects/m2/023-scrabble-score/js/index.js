
let word = prompt("--- Scrabble Score ---\n\nIn the game of Scrabble, each letter has points associated with it. The total score of a word is the sum of the scores of its letters.\n\nEnter a word to see how many points it will score: ");

const scrabble = {
    1: ["A", "E", "I", "L", "N", "O", "R", "S", "T", "U"],
    2: ["D", "G"],
    3: ["B", "C", "M", "P"],
    4: ["F", "H", "V", "W", "Y"],
    5: ["K"],
    6: ["J", "X"],
    10: ["Q", "Z"]
};

//after i've created my variable for the word and the object "scrabble", i declare the function "getPoints", with the parameters "word" and "object".
    function  getPoints(word, object) {

//the word is set to UpperCase to easily match the values of the object.
        word  = word.toUpperCase(); 
        let points = 0;


//then i iterate over every char in the word.
        for(i = 0; i < word.length; i++){

//here we iterate again over every keys of the object (scrabble, this time), to see if the array created from the use of "Object.values" for every keys includes the char were we are on the main loop. is the boolean result is true, then we add the corrispective "key" value to the variable point. 
            for(j = 0; j < Object.keys(object).length; j++){

                if (Object.values(object)[j].includes(word[i])){
                    points += parseInt(Object.keys(object)[j])
                }

            }

        }

        return "Your 'Scrabble' score for that word is " + points + "!";
    }


    alert(getPoints(word, scrabble));