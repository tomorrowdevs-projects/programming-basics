let value;
let values = [];
while(value != 0) {
  value = prompt('number?','');
  values.push(value)
}

if (value == 0) {
  values.pop();
  values.sort((a,b)=>b-a)}

for (key of values) {
    alert(key)}