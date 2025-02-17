function editDistace(s,t) {
  if (s.length == 0) return t.length
  else if (t.length == 0) return s.length;
  let cost = 0;
  
  if (s[0] != t[0]) {
    let d1 = editDistace(s.slice(1),t)+1;
    let d2 = editDistace(s,t.slice(1))+1;
    let d3 = editDistace(s.slice(1),t.slice(1))+1;
    return cost = Math.min(d1,d2,d3)
  }  else if (s[0] = t[0]) return cost = editDistace(s.slice(1),t.slice(1))
}

alert(editDistace(prompt("string 1?"),prompt("string 2?")))