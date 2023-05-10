//vowel or consonant-m1-009

let letter=prompt('insert a letter');
letter=letter.slice(0,1);


if ((letter==('a')) || (letter==('e')) || (letter==('i')) ||(letter==('o')) || (letter==('u'))){
alert('it is a vowel');
} else if (letter=='y'){
  alert('letter Y sometimes is a vowel and sometimes is a consonant');
} else if (letter<=0 || letter>=0) {
  alert('you must insert a letter,not a number');
} else {
  alert('it is a consonant');
}