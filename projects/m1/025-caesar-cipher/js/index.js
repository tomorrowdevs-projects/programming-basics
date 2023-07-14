// # Caesar Cipher

// One of the first known examples of encryption was used by Julius Caesar. 
// Caesar needed to provide written instructions to his generals, but he didn’t want his enemies to learn his plans if the message slipped into their hands. 
// As a result, he developed what later became known as the Caesar cipher.
// The idea behind this cipher is simple (and as such, it provides no protection against modern code breaking techniques). 
// Each letter in the original message is shifted by 3 places. As a result, A becomes D, B becomes E, C becomes F, D becomes G, etc.

// The last three letters in the alphabet are wrapped around to the beginning: X becomes A, Y becomes B and Z becomes C. 
// Non-letter characters are not modified by the cipher.
// Write a program that implements a Caesar cipher. 
// Allow the user to supply the message and the shift amount, and then display the shifted message. 
// Ensure that your program encodes both uppercase and lowercase letters. Your program should also support negative shift values so that it can be used both to encode messages and decode messages.

// # Cifrario di Cesare

// Uno dei primi esempi noti di crittografia è stato utilizzato da Giulio Cesare.
// Cesare doveva fornire istruzioni scritte ai suoi generali, ma non voleva che i suoi nemici venissero a conoscenza dei suoi piani se il messaggio fosse scivolato nelle loro mani.
// Di conseguenza, sviluppò quello che in seguito divenne noto come cifrario di Cesare.
// L'idea alla base di questo cifrario è semplice (e come tale non fornisce alcuna protezione contro le moderne tecniche di violazione del codice).
// Ogni lettera nel messaggio originale è spostata di 3 posizioni. Di conseguenza, A diventa D, B diventa E, C diventa F, D diventa G, ecc.

// Le ultime tre lettere dell'alfabeto sono avvolte all'inizio: X diventa A, Y diventa B e Z diventa C.
// I caratteri non alfabetici non vengono modificati dalla cifratura.
// Scrivere un programma che implementi un cifrario di Cesare.
// Consenti all'utente di fornire il messaggio e l'importo del turno, quindi visualizza il messaggio spostato.
// Assicurati che il tuo programma codifichi sia lettere maiuscole che minuscole. Il tuo programma dovrebbe anche supportare valori di spostamento negativi in ​​modo che possa essere utilizzato sia per codificare che per decodificare i messaggi.

const USERCHOICE = prompt("Enter 'Encrypt message' to encrypt or 'Decrypt message' to decrypt");
let userSentence = prompt("Enter the phrase you want to encode or decode");
let modifiedSentence = '';

if (USERCHOICE == "Decrypt message") {

for (let i = 0; i < userSentence.length; i++) {
    let characterCode = userSentence.charCodeAt(i);

    if (characterCode >= 65 && characterCode <= 90) {
        modifiedSentence += String.fromCharCode((characterCode - 65 - 3 + 26) % 26 + 69);
    } else if (characterCode >= 97 && characterCode <= 122) {
        modifiedSentence += String.fromCharCode((characterCode - 97 - 3 +26 ) % 26 + 97);
    } else {
        modifiedSentence += userSentence.charAt(i);
    }
}

alert(modifiedSentence);

} else if (USERCHOICE == "Encrypt message") {
    for (let i = 0; i < userSentence.length; i++) {
        let characterCode = userSentence.charCodeAt(i);

        if (characterCode >= 65 && characterCode <= 87) {
            modifiedSentence += String.fromCharCode(characterCode + 3);
        } else if (characterCode >= 97 && characterCode <= 119) {
            modifiedSentence += String.fromCharCode(characterCode + 3);
            }   else if(characterCode == 88){
                modifiedSentence += String.fromCharCode(65);
            } else if(characterCode == 89){
                modifiedSentence += String.fromCharCode(66);
            }
            else if(characterCode == 90){
               modifiedSentence += String.fromCharCode(67);
           }
            else if(characterCode == 120){
               modifiedSentence += String.fromCharCode(97);
           }
            else if(characterCode == 121){
               modifiedSentence += String.fromCharCode(98);
           }
            else if(characterCode == 122){
               modifiedSentence += String.fromCharCode(99);
           }
            else {
            modifiedSentence += userSentence.charAt(i);
        }
    }

    alert(modifiedSentence);

} else {
    alert("phrase not valid")
}

