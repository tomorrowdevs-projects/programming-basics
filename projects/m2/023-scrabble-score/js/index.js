/*In the game of Scrabble, each letter has points associated with it. The total score of a word is the sum of the scores of its letters.

Write a program that computes and displays the Scrabble score for a word.

Create a dictionary that maps from letters to point values. Then use the dictionary to compute the score.*/

function getPointScrabble(objPointLetter, word) {
    // set word for match each case
      const tmpWord = word.toUpperCase()
      let point = 0;
    
    // loop for length word e use method array for match letter/point
      for (let i = 0; i <= tmpWord.length; i++) {
        
        for (key in objPointLetter) {
          
          if (objPointLetter[key].includes(tmpWord[i])) {
            point += parseInt(key);
          } 
          
        }
      }
      return point;
    }
    
    const objPointScrabble = {
      1: ["A", "E", "I", "L", "N", "O", "R", "S", "T", "U"],
      2: ["D", "G"],
      3: ["B", "C", "M", "P"],
      4: ["F", "H", "V", "W", "Y"],
      5: ["K"],
      8: ["J", "X"],
      10: ["Q", "Z"]
    }
    
    const userInput = prompt("Enter your word and I will tell you the points you have accomplished");
    
    alert(`The points you made with the word "${userInput.toUpperCase()}" are: ${getPointScrabble(objPointScrabble, userInput)}`)