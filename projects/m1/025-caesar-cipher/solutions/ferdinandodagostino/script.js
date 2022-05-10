// One of the first known examples of encryption was used by Julius Caesar. Caesar needed to provide written instructions to his generals, but he didn’t want his enemies to learn his plans if the message slipped into their hands. As a result, he developed what later became known as the Caesar cipher. The idea behind this cipher is simple (and as such, it provides no protection against modern code breaking techniques). Each letter in the original message is shifted by 3 places. As a result, A becomes D, B becomes E, C becomes F, D becomes G, etc.

// The last three letters in the alphabet are wrapped around to the beginning: X becomes A, Y becomes B and Z becomes C. Non-letter characters are not modified by the cipher. Write a program that implements a Caesar cipher. Allow the user to supply the message and the shift amount, and then display the shifted message. Ensure that your program encodes both uppercase and lowercase letters. Your program should also support negative shift values so that it can be used both to encode messages and decode messages.

//per adesso funziona in lowerCase
const msgToEncrypt = prompt('Inserisci un messaggio').toLowerCase();
let shiftAmount = parseInt(prompt('Inserisci lo shift amount in numeri'));
const specialCharsAndNum = /[` !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/;
const letterArray = [];

for (let index = 0; index < msgToEncrypt.length; index++) {
  const letter = msgToEncrypt[index];
  let letterToSwitch = letter.charCodeAt(0) + shiftAmount;
  //gli ascii code delle lettere in alfabeto in lowerCase vanno da 97 a 122, se l'ascii code della lettera è maggiore di 122, lo sottraggo  a 122 e aggiungo 96 per rimettermi in testa all'alfabeto
  while (letterToSwitch > 122) {
    letterToSwitch = letterToSwitch - 122 + 96;
    console.log(letterToSwitch);
  }
  //faccio il procedimento inverso di sopra
  while (letterToSwitch <= 96) {
    letterToSwitch = letterToSwitch - 96 + 122;
    console.log(letterToSwitch);
  }

  if (specialCharsAndNum.test(letter)) {
    letterArray.push(letter);
  } else {
    letterArray.push(String.fromCharCode(letterToSwitch));
  }
}
const msgEncrypted = letterArray.join('');
alert(`${msgEncrypted}`);
