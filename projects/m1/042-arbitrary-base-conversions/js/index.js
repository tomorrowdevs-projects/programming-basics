const numberUser = prompt("Enter a number").toUpperCase();
const baseNumber = prompt("Enter the base of the entered number (it only accepts values between 2 and 16)");
const baseConvertNumber = prompt("Enter the base in which you want to convert the number (it only accepts values between 2 and 16)");

const convertNumberUserBase10 = convertNumberBase10(numberUser, baseNumber, baseConvertNumber);
const convertNumberUserBaseArbitrary = convertNumberBaseArbitrary(numberUser, baseNumber, baseConvertNumber);

let message = `The number ${numberUser} written in base ${baseNumber} corresponds to ${baseConvertNumber === "10" ? convertNumberUserBase10 : convertNumberUserBaseArbitrary}`;

if(!convertNumberUserBase10 || !convertNumberUserBaseArbitrary){
  alert("The entered values are not valid");
} else {
  alert(message);
}


function convertNumberBase10(number, base){ 

  if(base < 2 || base > 16){
    return false;
  }

  return parseInt(number, base).toString(10).toUpperCase();;

}

function convertNumberBaseArbitrary(number, base, baseConvertNumber){

  if((base < 2 || base > 16) || ((baseConvertNumber < 2 || baseConvertNumber > 16))){
    return false;
  }

  return numbeparseInt(number, base).toString(baseConvertNumber).toUpperCase();

}