function isPalindrome(str) {
    arr = str.split(' ');
    for (let i = 0; i <= Math.floor(arr.length/2); i++) {
      if (arr[i] !== arr[arr.length-i-1]) return false
    }
    return true
  }
  
  alert(isPalindrome("questa frase altro per vale per altro frase questa"))