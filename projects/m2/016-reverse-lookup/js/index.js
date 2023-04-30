// Create a dictionary
const dictionary = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 1,
}

const userValue = parseInt(prompt('Enter a number', '1'))
//Function reverseLookup finds all of the keys in a dictionary that map to a specific value
function reverseLockup(obj, value){
    //Create empathy array for saving the keys
    const keyObject = []

    //Check if userValue exists in the dictionary
    for(let item in obj){
        if(obj[item] === value){
        keyObject.push(item);
        } 
    }

    const checkResponse = keyObject.length > 0 ? keyObject.join(', ') : "Nessun risultato"

    return checkResponse
}

console.log(reverseLockup(dictionary, userValue))