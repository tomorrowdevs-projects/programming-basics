centeredSpaces("prova", 20)
centeredSpaces("testo", 50)
centeredSpaces("test", 3)

function centeredSpaces(s, w){

  if(s.lenght >= w){
    return s;
  } 
  
  let spaces = "";

  for(let i = 0; i < -(s.length - w) / 2; i++){
    spaces += " ";
  }

  console.log(spaces + s + spaces);

  return spaces + s + spaces;

}