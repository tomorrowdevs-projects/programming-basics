let value;
let values = [];
while(value != 0) {
  value = prompt('number?','');
  values.push(value)
}

if (value == 0) {
  values.pop();
  values.sort((a,b)=>a-b)}

for (key of values) {
    alert(key)}