// enter one letter or alphabet
const userLetter=prompt('Please, enter one letter');
// a,e,i,o,u are vowel
switch(userLetter){
  case 'a': 
  case 'e': 
  case 'i': 
  case 'o': 
  case 'u': 
    alert('The letter is a vowel.');
    break;
  // y sometimes is a vowel and sometimes is a consonant
  case 'y': 
    alert('Sometimes the letter is a vowel, sometimes is a consonant');
    break;
  // other letters are consonant
  default:
    alert('The letter is a consonant')
}