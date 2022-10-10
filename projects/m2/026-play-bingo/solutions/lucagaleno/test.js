



function randomNumber(max){
    return Math.floor(Math.random() * max)
};




function test(){
   
    let sum = 0;
    for(let i = 0; i <=2; i++){

        let num = randomNumber(10);
        
        sum = sum + num;
        console.log(num)
    }
    return sum
}

console.log(test())



