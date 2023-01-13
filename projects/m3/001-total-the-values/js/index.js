const sumValue = () => {
 const userNumber = prompt('Enter a integer(blank to quit)');
 return userNumber == '' ?'0.0' : +userNumber + +sumValue(userNumber);
}

console.log(`The total is : ${sumValue()}`)
