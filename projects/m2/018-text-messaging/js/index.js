const userMessage = prompt('Enter the text message', 'Hello, World!').toUpperCase()

const dictionary = {
  1: [ '.', ',', '?', '!', ':' ],
  2: ['A', 'B', 'C'],
  3: ['D', 'E', 'F'],
  4: ['G', 'H', 'I'],
  5: ['J', 'K', 'L'],
  6: ['M', 'N', 'O'],
  7: ['P', 'Q', 'R', 'S'],
  8: ['T', 'U', 'V'],
  9: ['W', 'X', 'Y', 'Z'],
  0: [' '],
}
const textMessage = (text, dictionary) => {
  // split message
  const textSplit = text.split('')
  let number = '';
  // Check if the element of the message is included in the dictionary
  const message = textSplit.map((letter) => { 
    for (let item in dictionary) {
      if(dictionary[item].includes(letter)) {
        number += item.repeat(dictionary[item].indexOf(letter) + 1)
      }
    }
  })

  return number
}

console.log(textMessage(userMessage, dictionary)) 
// Hello, World!: 4433555555666110966677755531111