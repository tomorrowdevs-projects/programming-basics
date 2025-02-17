function avoidingDuplicates(){
    let a = "ok";
    let b = [];
    while(a != ""){
        a = prompt("Insert a word, for terminate insert an empty string");
        if(a != ""){
            b.push(a);
        }
    }
    let c = b.filter((element, index) => {
        return b.indexOf(element) === index;
    });
    if(c.length > 0){
        for(let i = 0; i < c.length; i++){
            console.log(cpr[i]);
        }
    } else {
        console.log("You have not entered any words");
    }
};

avoidingDuplicates();