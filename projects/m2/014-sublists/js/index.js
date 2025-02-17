const firstList= prompt('Please, enter elements for first list', '20,30,40,50').split(',')
const secondList= prompt('Please enter elements for second list', '20,30').split(',')

const isSublist = (first, second) => {
  if(first.length <= 1 || second.length <= 1){
    // the empty list is a sublist of any list
    return true;
  } else { 
   // check if the secondList is a sublist, return a boolean value
  return second.every((item) => first.includes(item))
  }
}

console.log(isSublist(firstList, secondList))