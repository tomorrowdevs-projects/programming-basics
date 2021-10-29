let array = []
let outiersNumbers = []

function main () {
handleArray()
return array
}

function handleArray() {
  while(array.length <= 4) {
    let temp;
    temp = parseInt(prompt("minimum 4 number in the list please digit another number :"))
    temp > -1 ? array.push(temp) : null
    }
array.sort( (a, b) => a - b )

outiersNumbers.push(array.splice(0, 2))
outiersNumbers.push(array.splice( -2, 2))
}


main()
console.log(array)
 console.log(outiersNumbers)
