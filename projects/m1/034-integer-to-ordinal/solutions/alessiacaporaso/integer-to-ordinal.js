// takes an integer as its only parameter and returns a string
// handle the integers between 1 and 12
// return an empty string if the function is called with an argument outside of this range

const userNumeber = parseInt(prompt("Enter a number between 1 and 12"))

function convertNumber(number){
    const ordinalNumber = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh", "Twelfth"]
    if(number >= 1 && number <= 12){
        const positionNumber = ordinalNumber[number -1]
        // console.log(number, positionNumber)
        return positionNumber
    } else {
        alert("Error! Can't enter an empty string or a number outside of the range between 1 and 12")
    }
}

console.log(`The number entered is: ${userNumeber}. The ordinal number  is: ${convertNumber(userNumeber)}`)

// function convertNumber(number) {
//   let ordinalNumber = "";
//   switch (number) {
//     case 1:
//       ordinalNumber = "first";
//       break;
//     case 2:
//       ordinalNumber = "second";
//       break;
//     case 3:
//       ordinalNumber = "third";
//       break;
//     case 4:
//       ordinalNumber = "fourth";
//       break;
//     case 5:
//       ordinalNumber = "fifth";
//       break;
//     case 6:
//       ordinalNumber = "sixth";
//       break;
//     case 7:
//       ordinalNumber = "seventh";
//       break;
//     case 8:
//       ordinalNumber = "eighth";
//       break;
//     case 9:
//       ordinalNumber = "ninth";
//       break;
//     case 10:
//       ordinalNumber = "tenth";
//       break;
//     case 11:
//       ordinalNumber = "eleventh";
//       break;
//     case 12:
//       ordinalNumber = "twelfth";
//       break;
//     default:
//       ordinalNumber = "Error! Can't enter an empty string or a number outside of the range between 1 and 12";
//       break;
//   }
//   if(number >= 1 && number <= 12){
//     alert(`The number entered is: ${number}. The ordinal number  is: ${ordinalNumber}`)
//   } else {
//     alert(ordinalNumber)
//   }
// }
// convertNumber(1)
// convertNumber(4)
// convertNumber(7)
// convertNumber(12)
// convertNumber(20)