const getTail = (arr,command, number = 10)=> {
    if(command === 'tail'){
        const tail = arr.filter((elem,index) => index >= arr.length - number).join('\n');
        console.log(tail);
    }else{
        console.log(`bash: ${command}: command not found`)
    }  
}

module.exports = getTail
