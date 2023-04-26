let userDigit = prompt('insert word').toLowerCase();
  
  //suddivido la stringa in array,inverto gli array e poi unisco tutto in unica stringa 
let splitString = userDigit.split('');
//console.log(splitString);

let reverseString = splitString.reverse();
//console.log(reverseString);

let joinString = reverseString.join('');
//console.log(joinString);
                                  
let reversDigit = joinString;


if (userDigit == reversDigit) {
    alert(`It is palindrome`);
} else {
    alert(`It's not palindrome `);
}
