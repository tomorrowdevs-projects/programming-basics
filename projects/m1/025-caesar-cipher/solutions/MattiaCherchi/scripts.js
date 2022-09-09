let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let message = prompt('enter the message to be encrypted (blank to skip)').toLowerCase();
let encryptionKey = parseInt(prompt('Tell me the encryption key (blank to skip)'));
let encryptedMessage = '';


if(message != '' && encryptionKey != 0){

    for(let i = 0; i < message.length; i++){  
        let currentLetter = message[i];
        if(currentLetter === ' '){
            encryptedMessage += currentLetter;
            continue;
        }

        let position = alphabet.indexOf(message[i]);
        encryptedMessage += alphabet[(position + encryptionKey) % alphabet.length];
       
    }
    alert(`Your message encrypted is ${encryptedMessage}`)
}else {
    alert('there are no messages to encrypt')
}


let messageToDecripted = prompt('enter the message to be dencrypted (blank to skip)').toLowerCase();
let decryptionKey = parseInt(prompt('Tell me the Dencryption key (blank to skip)'));
let decryptedMessage = '';

if(messageToDecripted != '' && decryptionKey != 0){
    for(let i = 0; i < messageToDecripted.length; i++){
        let currentLetter = messageToDecripted[i];
        if(currentLetter === ' '){
            decryptedMessage += currentLetter;
            continue;
        }
        let position = alphabet.indexOf(messageToDecripted[i]);
        decryptedMessage += alphabet[(position - decryptionKey + alphabet.length) % alphabet.length];  
    } 
    alert(`Your message dencrypted is ${decryptedMessage}`)
}else {
    alert('there are no messages to dencrypt')
}


