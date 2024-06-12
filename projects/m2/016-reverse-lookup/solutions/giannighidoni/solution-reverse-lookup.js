function Dictionary(){
    this.key1 = "Paolo";
    this.key2 = "Marco";
    this.key3 = "Maria";
    this.key4 = "Luisa";
    this.key5 = "Gianni";
    this.key6 = "Andrea";
    this.key7 = "Paolo";
}
let users = new Dictionary();

console.log(users);

const searchedName = prompt("Please, enter a name.");

function reverseLookup(users, searchedName){
    let keysList = [];
    for(let key in users){
        if(users[key] === searchedName){
            keysList.push(key);
        }
    }
    return keysList;
}

console.log(reverseLookup(users, searchedName));