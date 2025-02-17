function trimString(s,w){
    const stringLenght = s.length;
    const numberSpace = Math.floor((w-parseInt(stringLenght))/2);
    if (stringLenght>=w){
        console.log(`${s}`)
    }else{
        const whiteSpace = " ".repeat(numberSpace);
        console.log(`${whiteSpace}${s}${whiteSpace}`)
    }
    
}

trimString("Hello",10)