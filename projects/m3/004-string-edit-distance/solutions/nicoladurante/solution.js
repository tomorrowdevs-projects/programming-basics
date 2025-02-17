function editDistance(s, t) {
  if (s.length == 0) {
    return t.length;
  }

  if (t.length == 0) {
    return s.length;
  }

  let cost = 0;

  if (s[s.length - 1] != t[t.length - 1]) {
    cost = 1;
    let d1 = editDistance(s.slice(0, length - 1), t) + 1;
    let d2 = editDistance(s, t.slice(0, length - 1)) + 1;
    let d3 =
      editDistance(s.slice(0, length - 1), t.slice(0, length - 1)) + cost;

    return Math.min(d1, d2, d3);
  } else {
    return editDistance(s.slice(0, length - 1), t.slice(0, length - 1));
  }
}

function main() {
  let string1 = prompt("Enter string 1: ");
  let string2 = prompt("Enter string 2: ");
  alert("The edit distance is: " + editDistance(string1, string2));
}

main();
