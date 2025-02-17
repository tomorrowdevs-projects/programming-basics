let penny;
let nickel;
let dime;
let quarter;
let loonie;
let toonie;
let memo;    

let myChange=prompt('how many cents do you have?');


if (myChange<=0) {
  alert('there are no money!')
} else {



  toonie= Math.floor(myChange/200);
  memo= myChange % 200;

  loonie= Math.floor(memo/100);
  memo= memo % 100;

  quarter= Math.floor(memo/25);
  memo= memo % 25;

  dime= Math.floor(memo/10);
  memo= memo % 10;

  nickel= Math.floor(memo/5);
  memo= memo % 5;

  penny= Math.floor(memo/1);
  memo= memo % 1;

  alert( `your change is: 
  \n${toonie+ (" toonies")}, \n${loonie+ (" loonies")}, \n${quarter+ (" quarters" )}, \n${dime+ (" dimes" )}, \n${nickel+ (" nickels" )}, \n${penny+ (" pennies.")}` );
}