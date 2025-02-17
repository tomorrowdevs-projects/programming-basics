let intList = [];

do{
    let userInt = parseInt(prompt('Enter a integer (type 0 to quit)'));
    let correctInt = /^[0-9]+$/.test(userInt);

    if(userInt == 0){
      break;
   }

    if(correctInt){
    intList.push(userInt);

    while(userInt != 1){
        if(userInt % 2 == 0){
            userInt = Math.floor(userInt/2);
            intList.push(userInt);
        }else if(userInt % 2 != 0){
            userInt = ((userInt * 3) + 1);
            intList.push(userInt);
        }
    }
    alert(intList.join(" "));
    intList = [];
  }else{
    alert('Error! Enter a positive integer ')
  }
}while(true)