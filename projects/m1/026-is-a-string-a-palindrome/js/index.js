const userInput = prompt("Enter a word to check for palindromes").toLowerCase().split("");
let countReverse = userInput.length - 1;
let isPalindrome = false; 

console.log(userInput);

for(let i = 0; i < userInput.length; i++){

  if(userInput[i] == userInput[countReverse]){
    isPalindrome = true;
  } else{
    isPalindrome = false;
  }

  countReverse--;
  
}

if(isPalindrome){
  alert("The word " + userInput.join("") + " is palindrome");
} else {
  alert("The word " + userInput.join("") + " is not palindrome");
}