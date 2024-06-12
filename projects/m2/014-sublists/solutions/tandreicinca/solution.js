// 1. write a functions that determines if a list is a sublist of another list (a. I have to consider an element and first of all verify if that is an array b. then I verify if the elements of the first array are contained within the second array)

function isSublist(listOne, listTwo) {
  // I declare two variables with the length of the considered arrays 
  lenOne = listOne.length
  lenTwo = listTwo.length
  match = []
  // I am going to create a function that compare each value of the second array with those of the first one, if they don't match I repeat this process but I start to compare from next position
         
    if (Array.isArray(listOne) && Array.isArray(listTwo)) {
        if (lenOne > lenTwo) {          // I verify if the first list is greater than second one
          for (i = 0; i < lenTwo; i++) {
            console.log(listOne.indexOf(listTwo[i]))
            if (listOne.indexOf(listTwo[i]) != -1) {
              match.push(listTwo[i])
              console.log(match)
            } else {
              return false
            }
          } 
          if (match.length != lenTwo) {
            return false
          } else {
            return true
          }
        } else {
          return false
        }
    } else {
      return false
    }
}

let inputOne = prompt('Write something...')           // I ask an input which is going to be assigned to a variable
const regex = /[!"#$%&()*+, -./:;<=>?@[\]^_`{|}~]/g;   // I modify the input to a standard format
let result = inputOne.replace(regex, '');
let arrayOne = result.split('')
console.log(arrayOne)                       // I transform the input from string to array
let inputTwo = prompt('Write something...')
let resultTwo = inputTwo.replace(regex, '');
let arrayTwo = resultTwo.split('')
console.log(arrayTwo)                          // repeating process
if (isSublist(arrayOne, arrayTwo) == true) {          // now let's see what we've done
  alert (arrayTwo + ' are a sublist of ' + arrayOne)
} else {
  alert(false)
}