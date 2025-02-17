function sortedOrder(){
    let a = 1;
    let b = [];

    while(a != 0){
        a = prompt('Insert number, for terminate program insert "0"');  
        if(a != 0){
        b.push(a);
        }  
    }

    b = b.sort();

    if(b.length > 0){
        for(let i = 0; i < b.length; i++){
            console.log(b[i]);
        }
    } else {
        console.log("No number has been entered");
    }   
}

sortedOrder();