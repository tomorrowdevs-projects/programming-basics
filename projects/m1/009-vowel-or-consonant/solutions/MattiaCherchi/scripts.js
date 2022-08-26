let userLetter = prompt('enter a letter of the alphabet');

userLetter = userLetter.toLowerCase(); // Nel caso l'utente inserisca una lettera maiuscola quest'ultima viene convertita in minuscolo 

/*L'espressione regolare ci permette di impostare un patern di controllo 

La seguente espressione si compone degli elementi :

1) /Patern/ sequenza di caratteri di controllo 
2) ^ indica l'inizio della stringa 
3) [...] le parentesi quadre identificano range e classi di caratteri
4) [a-z] il ( - ) indica che la stringa deve contenere i caratteri che vanno da ("a") a ("z")
5) {1} indica che la stringa deve contenere uno solo carattere di quelli compresi nelle parentesi quadre
6) $ indica il termine della stringa 

il metodo test(userLetter) restituisce un valore booleano ("true" o "false") e ci permette di effettuare il controllo sulla stringa inserita dall'utente in 
modo da verificare se viene rispettato il patern impostato nell'espressione regolare.

*/
let Letters = /^[a-z]{1}$/.test(userLetter);

if(Letters){
    if(
        userLetter == 'a' ||
        userLetter == 'e' ||
        userLetter == 'i' ||
        userLetter == 'o' ||
        userLetter == 'u'
        ){
          alert('the letter entered is a vowel'); 
        }else if (
            userLetter == 'y'
        ){
          alert('the letter y sometimes serves as a vowel and sometimes as a consonant'); 
        }else{
          alert('the letter entered is a consonant');
        }
}else{
    alert('Error!the character entered is not a letter ')
}

