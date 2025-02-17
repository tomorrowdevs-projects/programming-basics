
let x;
let y;

x = +prompt('insert a coordinate x');
y = +prompt('insert a coordinate y');

let x1 = x;
let y1 = y;
let x2;
let y2;
let Sides;
let Permtr = 0;

while (x2 != '') { 
  x2 = +prompt('insert a new coordinate x');
    switch (x2) { 
    case '' :
    break;

  default :
    y2 = +prompt('insert a new coordinate y');
      
 Sides = Math.sqrt((+x2 - x1)**2 + (+y2 - y1)**2);
   
  Permtr += Sides;   
  x1 = x2;
  y1 = y2;     
    }

}

Sides = Math.sqrt((+x2 - x1)**2 + (+y2 - y1)**2);
Permtr += Sides;
alert(`The perimeter of that polygon is ${Permtr}`)