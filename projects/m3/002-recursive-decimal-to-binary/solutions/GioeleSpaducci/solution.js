function toBinary(n) {
  if (+n == 1 || +n == 0) return  `${+n%2}`;
  return toBinary(Math.floor(+n/2)) + +n%2
}

let n = prompt("positive integr?");
if (n >= 0) alert(toBinary(n))
else alert("error")