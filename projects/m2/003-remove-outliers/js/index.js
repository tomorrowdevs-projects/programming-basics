// first function takes a list of values and a non-negative integer, n, as its parameters
let userList = parseInt(prompt('Enter the first number.'));
let errorMessage = 'Error! The number of inserted elements must be greater than '
if(userList <= 0){
  alert(errorMessage + 0)
}
const number = userList
const list = new Array()
while(userList !== 'f'){
  userList = prompt('Enter list of number (enter f for stop enter value)')
  list.push(userList)
}
// remove the last element of list 
const removeLastElement = list.pop()
// generate an error if the user enters less than 4 values.
if(list.length < 4){
 alert(errorMessage + 4)
} else {
  console.log('original list '+ list + ', new list ' +  removeOtlinrs(list, number))
}

function removeOtlinrs(list, n){
  const convertList = list.map(item => parseInt(item));
  // takes the small and large elements in the list and after remove elements
  const smallerNumbers = convertList.sort((a, b) => a - b).filter((value) => value <= n).splice(0, n)
  const biggerNumbers = convertList.sort((a, b) => a + b).filter((value) => value >= n).splice(-n)
  const removeSmallNumbers = convertList.filter((value) => { return !smallerNumbers.includes(value)})
  const removeBigNumber = removeSmallNumbers.filter((value) => { return !biggerNumbers.includes(value)})
  return removeBigNumber
}