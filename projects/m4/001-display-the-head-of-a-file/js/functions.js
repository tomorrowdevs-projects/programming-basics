const getHead = (arr,command, number = 10)=> {
    if(command === 'head'){
        const head = arr.filter((elem,index) => index < number).join('\n');
        console.log(head);
    }else{
        console.log(`bash: ${command}: command not found`)
    }  
}

module.exports = getHead;