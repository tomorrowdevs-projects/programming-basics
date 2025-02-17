const userString = prompt('Enter a string that you want to tokenizing','20 - (5 * 4)').split(' ')

const tokenizingString = (item) => {
  const symbolList = ["*","/","^","-","+","(",")","[","]","{","}"]
  const token = []
  for(let i of item){
    if(symbolList.indexOf(i) >= 0){
      token.push(i)
    } else {
      const checkNumber = i.split('')
      let string = ''
      for(let element of checkNumber)
        if(symbolList.indexOf(element) < 0){
          string += element
        } else {
          token.push(element)
        }
      token.push(string)
    }   
  }
  return token.join('\n')
}

console.log('Token:\n' + tokenizingString(userString))