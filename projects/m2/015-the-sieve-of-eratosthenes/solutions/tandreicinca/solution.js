// Create an algorithm that calculate the prime numbers between a range of values 1. write a function that takes a 'n' parameter as max value of the range 2. now for each value, starting with the smallest, I create a for loop that replace every multiple of this value (except it) with 0 and I set the counter to the next number

function theSieve(n) {
    // I start creating a list of numbers included between 2 and n
    list = []
    primeNum = []
    // I found this function on the internet to find prime Numbers
    function isPrime(element, index, array) {
        let start = 2;
        while (start <= Math.sqrt(element)) {
          if (element % start++ < 1) {
            return false;
          }
        }
        return element > 1;
      }
    for (i = 2; i <= n; i++) {
        list.push(i)
    }
    // now I have to make it work
    for (i = 0; i < list.length; i++) {
        prime = list.find(isPrime)
        primeNum.push(prime)
        list.shift()                    // how it is now, it seems it works, I just have to remove doubles
    }
    const uniqueSet = new Set(primeNum);
    const backToArray = [...uniqueSet];
    // it looks we find a solution. I stop here, I'm going to continue from here
    console.log(primeNum)
    return backToArray
}


let maxRange = prompt ('Write a number greater than 2')
while (maxRange <= 2) {
    maxRange = prompt ('Did you read what I said? A number greater than 2')
}
alert(theSieve(maxRange))
