let encDec = prompt('Encoder or Decoder ? Enter 1 for encoder or 2 for decoder');
let result = '';
let calcChar = 0;

if(encDec === '1'){
    let encoder = prompt('write the word or phrase to be encoded');
    let encKey = prompt('Enter the encryption key ( Number integer )');
    const encParsed = parseInt(encKey);
    if(!isNaN(encParsed)) {
        for(i=0; i<encoder.length; i++){
            if(/^([a-zA-Z])$/.test(encoder[i])) {
                calcChar = encoder.charCodeAt(i) + encParsed;
                if(calcChar > 90 && encoder[i] === encoder[i].toUpperCase() || calcChar > 122 && encoder[i] === encoder[i].toLowerCase()) calcChar -= 26; 
                const charReplace = String.fromCharCode(calcChar);
                result += charReplace;
            }else result += encoder[i];
        }
        alert(`Your Text encrypted : ${result}`);
    }else alert('Enter a integer number !!');

}else if(encDec === '2'){
    let decoder = prompt('write the word or phrase to be decoded');
    let decKey = prompt('Enter the encryption key ( Number integer )');
    const decParsed = parseInt(decKey);
    if(!isNaN(decParsed)) {
        for(i=0; i<decoder.length; i++){
            if(/^([a-zA-Z])$/.test(decoder[i])) {
                calcChar = decoder.charCodeAt(i) - decParsed;
                if(calcChar < 65 && decoder[i] === decoder[i].toUpperCase() || calcChar < 97 && decoder[i] === decoder[i].toLowerCase()) calcChar += 26; 
                const charReplace = String.fromCharCode(calcChar);
                result += charReplace;
            }else result += decoder[i];
        }
        alert(`Your Text decrypted : ${result}`);
    }else alert('Enter a integer number !!');
}else alert('you have to type 1 for encoder or 2 for decoder !!');
