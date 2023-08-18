function tokenize(str) {
    let tokens = [];
    tokens.push(str[0]);
    for (let i = 1; i < str.length; i++) {
      if (Number.isInteger(+str[i]) === Number.isInteger(+tokens[tokens.length-1])) {
        let tempToken = tokens.pop();
        tokens.push(tempToken + str[i])
      }
      else if (str[i] === " ") continue
      else  {
        tokens.push(str[i]);
      }
    }
    return tokens
  }
  
  let expression = prompt("expression?");
  expression = expression.split("");
  alert(expression);
  alert(tokenize(expression))