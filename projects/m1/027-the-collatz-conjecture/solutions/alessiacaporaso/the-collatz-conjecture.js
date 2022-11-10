// enter the number
let userChoice;
let message;
// continue program until the user enters a value for n that is less than or equal to zero
while (userChoice !== 0) {
  userChoice = parseInt(prompt('Please, enter a positive integer'))
  // reports all of the values in the sequence starting with n and ending with one
  if (userChoice <= 0) {
    message = 'Error, enter a positive number'
  } else {
    while (userChoice !== 1) {
      if (userChoice % 2 === 0) {
        userChoice = Math.floor(userChoice / 2)
        message = userChoice
      } else {
        userChoice = Math.floor((userChoice * 3) + 1)
        message = userChoice
      }
      console.log(message)
    }
  }
}