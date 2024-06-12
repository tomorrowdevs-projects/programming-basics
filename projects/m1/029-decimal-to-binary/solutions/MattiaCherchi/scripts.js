// r = resto
// q = quoziente

let binaryNum = [];


do{
  let userInt = parseInt(prompt('enter a decimal number to convert it to binary (digit 0 to quit)'));
  let correctNumber = /^[0-9]+$/.test(userInt);

  if(userInt == 0){
    alert('The binary number of 0 is 0');
    break;
 }

  if(correctNumber){

  let q = userInt;
 
   while(q > 0){
    let r = (q % 2);
    binaryNum.push(r) ;
    q = Math.floor(q/2);
  }
  alert(`The binary number of ${userInt} is ${binaryNum.reverse().join(" ")}`);
  binaryNum = [];

  }else{
    alert('Error! Enter a number');
  }
}while(true)


/* ---------SECONDA SOLUZIONE METODO toString() ---------------*/

// while(true){
//   let userInt = parseInt(prompt('Enter a integer (type 0 to quit)'));
//   let correctInt = /^[0-9]+$/.test(userInt);
//   if(correctInt){

//   if (userInt == 0){
//     alert('The binary number of 0 is 0');
//     break;
//   }

//   let binaryNum = userInt.toString(2);
//   alert(`The binary number of ${userInt} is ${binaryNum}`);

// }else{
//   alert('Error! Enter a number ')
// }
// }