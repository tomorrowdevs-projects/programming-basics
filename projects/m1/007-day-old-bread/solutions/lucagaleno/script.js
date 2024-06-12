//daya old bread

let numberLoavesOld =  parseInt(prompt('Enter number of Loaves: ', 0));

let pirceLoaves = 3.49;
let discountLoaves = 0.6;

function Nearest5(num) {
return Math.round(num / 0.05) * 0.05;
};

let regularPrice = Nearest5((numberLoavesOld*pirceLoaves)).toFixed(2);
let discontPrice = Nearest5((numberLoavesOld*discountLoaves*pirceLoaves)).toFixed(2);
let totalPrice = Nearest5((regularPrice - discontPrice)).toFixed(2);

alert('Regular price: '+ regularPrice + '\nDiscounted price: '+ discontPrice +'\nTotal price: '+ totalPrice) ;



