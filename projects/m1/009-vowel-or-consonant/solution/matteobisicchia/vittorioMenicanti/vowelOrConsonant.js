//Vowel Or Consonant

/* In this exercise you will create a program that reads a letter of the alphabet from the user. If the user enters a, e, i, o or u then your program should display a message indicating that the entered letter is a vowel. If the user enters y then your program should display a message indicating that sometimes y is a vowel, and sometimes y is a consonant. Otherwise your program should display a message indicating that the letter is a consonant. */

let isAvowel= prompt(`Please type any letter to see if  is a vowel or consonant`).toLowerCase();

if(isAvowel=='a' ||isAvowel=='e' || isAvowel=='i' ||isAvowel=='o' || isAvowel=='u'){

    alert(`the letter entered is a vowel`);

} else if(isAvowel == 'y'){

   alert(`The letter y sometimes is a vowel, sometimes is a consonant`);

}else{

    alert(`The entered letter is a consonant`);
}
