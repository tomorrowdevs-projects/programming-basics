
//i  first initialize my object using the costructor method.
function Person(name, surname, age, sex, money) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.sex = sex;
    this.money = money;
}


//then ask the user to enter some values for the object's proprieties.
let name = prompt("Please, enter your name: ");
let surname = prompt("Please, enter your surname: ");
let age = prompt("Please, enter your age: ");
let sex = prompt("Please, enter your sex: ");
let money = prompt("Please, enter your money: ");



const personOne = new Person(name, surname, age, sex, money);


let question = prompt("For what value are you searching, in the description you gave of you?")

// so i use the filter method on the "keys array" created to match the value entered in the question "prompt" with the keys in the object.
function getKey(object, value) {
    let keys = Object.keys(object);
    let found = keys.filter(key => object[key] === value);
    let result;
        if (found.length === 0 || value === "" || value === " "){
            result = "Your value is not present."
        } else {
            result = "Your value is present in the section: " + found.join(", ");
        }

    return result;
  }



alert(getKey(personOne, question));