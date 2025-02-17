




function reverseLookup(dictionary, value){
    const keys = Object.keys(dictionary);
    const foundKeys = [];
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (dictionary[key] === value) {
            foundKeys.push(key)
        }
    }
    
    return(foundKeys);

}


let age = {
    "Mario": 20,
    "Chiara": 25,
    "Gianluca": 32,
    "Marco": 20,
    "Sofia": 23,
}
console.log(reverseLookup(age,20));
console.log(reverseLookup(age,23));
console.log(reverseLookup(age,32));
console.log(reverseLookup(age,40));