function capitalize(string) {
    let newString = string.replace(/(\bi\b)|(\bi(?=[.!?']))/g, 'I');
  
    let newString2 = newString.replace(/([.!?])\s*([a-z])/g, function(match, p1, p2) {
      return p1 + " " + p2.toUpperCase();
    });

    let capitalizedString = newString2.charAt(0).toUpperCase() + newString2.slice(1);
    return capitalizedString;
  }
  
  function program() {
    let string = prompt("Inserisci una frase");
    document.getElementById('output').innerText = capitalize(string);
  }