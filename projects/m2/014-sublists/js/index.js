const prompt = require("prompt-sync")();


function isSublist(){
    const list = "25,30,35,40".split(",");
    const sublist = "25,30,35".split(",");
    const indexControl = [];

    for(i=0;i<sublist.length;i++){
        indexControl.push(list.indexOf(sublist[i]))
    }
    for(j=0;j<indexControl.length;j++){
        if(indexControl[j]+1 === indexControl[j+1] || sublist.join("") === ""){
            return true;
        }else{
            return false;
        }
    }

    console.log(indexControl);
}   

console.log(isSublist());