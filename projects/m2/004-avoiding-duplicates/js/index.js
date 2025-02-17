// program reads words from the user until the user enters a blank line 
// program should display each word entered by the user exactly once
// the words should be  displayed  in the same order

function listWord(){
// reads words from the user until the user enters a blank line 
    let userList = ' ';
    const list = new Array();
    while(userList !== ''){
        userList = prompt('Please enter a word, enters a blank line for end the program.');
        if(userList !== ''){
        list.push(userList.toLowerCase())
        }
    }
    console.log(list)
    return checkList(list)
}
// remove duplicate
function checkList(list){
    let uniqItem = [...new Set(list)]
    return uniqItem
}

const printWords = listWord()
    for(let item of printWords){
    alert(item)
}