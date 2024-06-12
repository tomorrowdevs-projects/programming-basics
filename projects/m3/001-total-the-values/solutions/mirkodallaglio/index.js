function sum (){
    let num = Number(prompt('Enter a number'));
    return num === 0 ? 0 : num + sum()
};

alert(`The total is: ${sum()}`)
