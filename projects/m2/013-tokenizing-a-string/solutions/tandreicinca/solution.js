// write a function that return a list of token from a mathematical expression

function tokenizing(expression) {
    const regex = /[!"#$%&,.: ;?@\_`|~]/g;
    const result = expression.replace(regex, '');                                 //I remove the characters that I don't need
    tokens = result.split('');
    return tokens
}

let expr = prompt('Write a mathematical expression')
alert('The tokens of this expression are ' + tokenizing(expr));