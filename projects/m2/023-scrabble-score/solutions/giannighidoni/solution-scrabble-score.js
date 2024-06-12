const lettersPoints = {
    1 : ["A", "E", "I", "L", "N", "O", "R", "S", "T", "U"],
    2 : ["D", "G"],
    3 : ["B", "C", "M", "P"],
    4 : ["F", "H", "V", "W", "Y"],
    5 : ["K"],
    8 : ["J", "X"],
    10 : ["Q", "Z"]
};

const str = "Quasar";
const strArr = str.split("");
let score = 0;

strArr.forEach(e => {
    let upperCase = e.toUpperCase();
    for(let key in lettersPoints){
        if(lettersPoints[key].includes(upperCase)){
            score += Number(key); 
        }
    }
})

console.log(score);