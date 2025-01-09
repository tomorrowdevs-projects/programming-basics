const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');
 
 
 const morse_code_dict = {
    'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',   'E': '.',    'F': '..-.',
    'G': '--.',   'H': '....',  'I': '..',    'J': '.---',  'K': '-.-',   'L': '.-..',
    'M': '--',    'N': '-.',    'O': '---',   'P': '.--.',  'Q': '--.-',  'R': '.-.',
    'S': '...',   'T': '-',    'U': '..-',   'V': '...-', 'W': '.--',   'X': '-..-',
    'Y': '-.--',  'Z': '--..',  '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
    '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.',
    '(': '-.--.',  ')': '-.--.-', '&': '.-...',  ':': '---...', ';': '-.-.-.', '=': '-...-',
    '+': '.-.-.',  '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.',
    ' ': '/'
}



function getMorse(string){

    let result='';
    for(let index = 0 ; index < string.length;index++){
        let add ='';
        if(index < string.length - 1){
            add =' '
        }
        const char = string[index];
        
        const morseChar= morse_code_dict[char.toUpperCase()]??''
        result= result + morseChar + add;
    }
    return result;

}



async function main() {
    
    
    const rl = readline.createInterface({ input, output });
     try{
       const stringInput=await getInput(rl);
      const inputMorse = getMorse(stringInput)
       console.log(inputMorse); 
       console.log('.... . .-.. .-.. --- .-- --- .-. .-.. -..');


     
     }
     catch(e){
        console.log(e)
     }
     finally{
        rl.close();
     }
    
    }
   main();




async function getInput(rl){
   
   const input = await rl.question(`Please enter the string: `)
    //const inputNumber = Number.parseInt(input,10);
    if(input.trim().length > 0){
        return input;
    }
   
    console.log("Please Enter a valid string")
   return getInput(rl);

}