//Write a function that generates a random password. The password should have a random length of between 7 and 10 characters. Each character should be randomly selected from positions 33 to 126 in the ASCII table. Your function will not take any parameters. It will return the randomly generated password as its only result. Display the randomly generated password in your file’s main program.

// const asciiChars = ['!',' "','#','$','%','&',"'",'(',')','*',' +',',','-','.','/','0','1','2','3','4','5','6','7','8','9',':',';','<','=','>','?','@','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','[','\',']','^','_','`','a','b','c','d','e','f','g','h','i','j','k','l',' m'    n
//     o
//     p
//     q
//     r
//     s
//     t
//     u
//     v
//     w
//     x
//     y
//     z
//     {
//     |
//     }
//     ~
//     ]

const asciiChars = [];
const randomCharacters = [];

//pusho i caratteri richiesti nell'array dei caratteri ascii
for (var i = 32; i < 127; ++i) {
  const chara = String.fromCharCode(i);
  asciiChars.push(chara);
}

//genero un numero random da 7 a 10 da usare per la lunghezza della password
const randomNumber = Math.floor(Math.random() * (10 - 7 + 1) + 7);

//pusho i caratteri ascii in un ulteriore array quanti sono i randomNumber
for (let index = 0; index < randomNumber; index++) {
  const randomCharaGenerator =
    asciiChars[Math.floor(Math.random() * asciiChars.length)];
  randomCharacters.push(randomCharaGenerator);
}

//leggo la password generata
const randomPassword = randomCharacters.join('');
console.log(randomPassword);
