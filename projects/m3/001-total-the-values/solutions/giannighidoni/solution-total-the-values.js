function sumValues(){
    const inputValue = prompt("Enter value")
    if(inputValue === ""){
        return 0;
    } else {
        return Number(inputValue) + Number(sumValues());
    }
}

console.log(sumValues()); 