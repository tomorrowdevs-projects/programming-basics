/** Class to contain balls of different colours */

class Hat {    
    /**
     * @param {object} balls is an object containing the number of balls of a specific colour
     */
    constructor(balls = {"red": 1}){
        
        // Error checking
        if (typeof balls != "object"){
            throw Error("You have to specify an object (e.g. {'red': 1, 'blue': 4})");
        }

        // Used to convert the 'balls' parameter to a list of string:  {'red': 1, 'blue': 4} -> ["red", "blue", "blue", "blue", "blue"]
        this.contents = [];

        for (const [key, value] of Object.entries(balls)){

            // Error checking - it seems that key is automatically converted to string
            if (!(typeof value == "number" && value >= 0)){                
                throw Error("You have to specify colour of the balls (string) and relative quantity (int, greater than 0) using an object (e.g. {'red': 1, 'blue': 4})");
            }

            for (let i = 0; i < value; i++){
                this.contents.push(key);
            }         
        }     
    }

    
    /**
     * Used to pick a rondm number of balls from the hat
     * @param {int} number of ball to pick from the hat
     * @returns result, the balls randomly picked
     */

    draw(number){

        // Error checking
        if (!(typeof number == "number" && number >= 0)){
            throw Error("You have to specify a quantity (int) greater than 0!")
        }

        const result = [];
        
        //cloning the attribute 'this.contents' into a temp variable used into the method.
        const temp = [...this.contents];

        if (number > this.contents.length){
            return temp;
        }

        for (let i = 0; i < number; i++){

            // Debugging log -> console.log("Pre drawn: " + temp + "\n");

            //picking random index
            let randomIndex = (Math.floor(Math.random() * temp.length + 1)) - 1;
                     
            //updating result
            result.push(temp[randomIndex]);
            
            // Debugging log -> console.log("ball drawn: " + temp[randomIndex] + "\n");
            
            //removing ball from list
            temp.splice(randomIndex, 1);

            // Debugging log -> console.log("Post drawn: " + temp + "\n");
        }

        return result;
    }
}


/**
 * The function is used to calculate the probability of a specific catch of balls into an hat.
 * @param {Hat} hat form wich balls are drawn
 * @param {object} expected_balls balls that are expected to be draw from the hat
 * @param {int} num_balls_drawn number of drawn
 * @param {int} num_experiments number of experiments
 * @returns {float} the probability 
 */
function experiment(hat, expected_balls, num_balls_drawn, num_experiments){
    
    //Error Checking
    if (!(hat instanceof Hat) || typeof expected_balls != "object" 
     || (typeof num_balls_drawn != "number" || num_balls_drawn < 0)
     || (typeof num_experiments != "number" || num_experiments < 0))
     {
        throw ("The args of the function have to be: \n" + 
        "hat => type 'Hat'\n" + 
        "expected_balls => type 'object' (e.g. {'red': 1, 'blue': 4})\n" +
        "num_balls_drawn => type 'number'\n" + "num_experiments => type 'number'");
     }

    //used to track number of times the result corresponds to expectations
    let count = 0;

    // used just to convert expected_balls {object} in the relative list of string (es. {"red" : 2} -> ["red", "red"]);
    let expected_balls_list = []; 
    
    if (hat.contents.length == 0){
        return 0;
    }

    for (const [key, value] of Object.entries(expected_balls)){
        for (let i = 0; i < value; i++){
            expected_balls_list.push(key);
        }         
    } 

    for (let i = 0; i < num_experiments; i++){
      let experimentResult = hat.draw(num_balls_drawn);     
      
      if (isContained(expected_balls_list, experimentResult)){
        count++;
      }

      // Debugging log -> console.log("experiment n: " + (i+1) + "\n" + expected_balls_list + "\n" + experimentResult + " -> " + count + "\n");  
    }
   
    return Math.floor((count / num_experiments)*100);

}


/**
 * Used to check if an object is contained into another
 * @param {Array<string>} contained 
 * @param {Array<string>} contain 
 * @returns {bool} 
 */
function isContained(contained, contain){

    //Error checking
    if (!(contained instanceof Array) || !(contain instanceof Array)){
        throw "You have to use two Arrays of strings (Array<string>) to check if the first one is contained into the second"
    }

    let containedLength = 0;
    contained.forEach(ball => {
        if(getOccurrence(contained, ball) <= getOccurrence(contain, ball)){
            containedLength++;
        }
    });   
    
    if (contained.length == containedLength){
        return true;
    }

    return false;
}


/**
 * Get the occurances of a value into an array
 * @param {Array} array 
 * @param {any} value 
 * @returns {int} number of occurances
 */
function getOccurrence(array, value) {
    if (!(array instanceof Array)){
        throw "The first argument must be an array!"
    }
    return array.filter((v) => (v === value)).length;
}


module.exports = {
    Hat: Hat,
    experiment: experiment 
};
