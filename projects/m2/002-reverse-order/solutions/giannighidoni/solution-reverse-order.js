function reverseOrder(){
    let a = 1;
    let b = [];

    while(a != 0){
        a = prompt('Insert integer number, for terminate program insert "0"'); 
        a = Number(a);
        if(Number.isInteger(a)){
            if(a != 0){
                b.push(a);
            }
        } else {
            console.log("please, insert valid number");
        }         
    }

    b = b.sort((a, b) => b - a);

    if(b.length > 0){
        for(let i = 0; i < b.length; i++){
            console.log(b[i]);
        }
    } else {
        console.log("No number has been entered");
    }   
}

reverseOrder();