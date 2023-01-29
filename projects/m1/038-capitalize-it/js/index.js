const messageUser = prompt("Enter a message:")
const capitalizedMessage = capitalizeIt(messageUser);
alert(capitalizedMessage);

function capitalizeIt(message){

  let messageSplit = message.split('');

  for(let i = 0; i < message.length; i++){
    
    if(i == 0){
      messageSplit[i] = messageSplit[i].toUpperCase();
    }

    if(messageSplit[i] == "." || messageSplit[i] == "!" || messageSplit[i] == "?"){
      if(messageSplit[i + 1] != undefined){
        messageSplit[i + 1] = messageSplit[i + 1].toUpperCase();
      }
    }

    if(messageSplit[i] == "i"){
      if(
      ((messageSplit[i - 1] == " ") || (messageSplit[i + 1] == " ")) ||
      ((messageSplit[i - 1] == ".") || (messageSplit[i + 1] == ".")) ||
      ((messageSplit[i - 1] == "!") || (messageSplit[i + 1] == "!")) ||
      ((messageSplit[i - 1] == "?") || (messageSplit[i + 1] == "?")) ||
      ((messageSplit[i - 1] == "'") || (messageSplit[i + 1] == "'"))
      ){
        messageSplit[i] = messageSplit[i].toUpperCase();
      }
    }

  }

  return messageSplit.join('');

}