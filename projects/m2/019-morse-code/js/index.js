// translate letters and digits, ignore character not included in the table

const code = { A: '._', B: '_...', C: '_._.', D: '_..', E: '.', F: '.._.', G: '__.', H: '....', I: '..', J: '.___', K: '_._', L: '._..', M: '__', N: '_.', O: '___', P: '.__.', Q: '__._', R: '._.', S: '...', T: '_', U: '.._', V: '.__', W: '.__', X: '_.._', Y: '_.__', Z: '__..', 1: '.____', 2: '..___', 3: '...__', 4: '...._', 5: '.....', 6: '_....', 7: '__...', 8: '___..', 9: '____.', 0: '_____', Á: '.__._', Ä: '._._', É: '.._..', Ö: '___.', Ü: '..__'
}

const userText= prompt('Enter the message', 'Hello, World!').toUpperCase()

const morseCode = (text, code) => {
  const splitText = text.split('')

  const newMessage = splitText.map((letter) => { 
    if(letter in code) return code[letter]
  })

  return newMessage.join(' ')
}

console.log(morseCode(userText, code))
// Hello, World! = .... . .-.. .-.. --- .-- --- .-. .-.. -..