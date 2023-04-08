let userList = '';
const listElements = []
while(userList !== 'f'){
  userList = prompt('Please enter an element, (enter f for finish)')
  if(userList !== 'f'){
    listElements.push(userList)
  }
}
const formattingList = (element) => {
  let list = ''
  const lengthList = element.length - 1
  element.map((item, index) => {
    if(index < lengthList){
      list += item + ', '
    } else {
      list += 'and ' + item
    }
  })
  return list
}

console.log(formattingList(listElements))