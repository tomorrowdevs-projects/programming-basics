//bottle deposits

let smallBottles=(0.10);
let bigBottles=(0.25);
let request=alert('please insert bottle.Less 1 liter give you 0.10$,more 1 liter give you 0.25$');

let totalSmallbottles=prompt('insert bottles of 1 liter and less');
let totalBigbottles=prompt('insert bottles of more then 1 liter');

alert(`you earned ${(totalSmallbottles*smallBottles)+(totalBigbottles*bigBottles)}$`);