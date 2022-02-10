let roman = {
  I:1,
  V:5,
  X:10,
  L:50,
  C:100,
  D:500,
  M:1000,
};

let string ="";

function convert_to_roman(string){
    let result = "";


for (let i= 0; let <= string.length; i++){
  if (string[i] === 0 || string === ""){
      result = 0;
  } else if(string[i] === "I" && string[i + 1] === 'V'){
      result +=4;
      i++
  } else if(string[i] === "X" && string[i + 1] === 'L'){
      result +=40;
      i++
  } else if(string[i] === "X" && string[i + 1] === 'C'){
      result +=90;
      i++;
  }else if(string[i] === "C" && string[i + 1] === 'D'){
      result +=400;
      i++;

  } else if(string[i] === "C" && string[i + 1] === 'M'){
      result +=900;

  } else if(string[i] === "I" && string[i + 1] === 'X'){
      result += 9;
      i++;    
  }
}};

let userInput = prompt('insert a roman number');

userInput.value = result.value;