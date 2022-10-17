
// ROULETTE PAYOUTS

let rouletteNumber = confirm('Press the Roulette Button');

 rouletteNumber = Math.floor(Math.random() * (0 + 37 ));

 let subSet;
 let colorsNumber;
 let odd_even;
 let redNumbers;
 let blackNumbers;
 

if(rouletteNumber === 37 ){

   alert('pay green 00');
}

if(rouletteNumber === 0){
    alert('pay green 0');
}

if( rouletteNumber ===  1 || rouletteNumber ===  3 || rouletteNumber === 5 || rouletteNumber === 7 || rouletteNumber === 9 || rouletteNumber === 12  || rouletteNumber === 14 || rouletteNumber === 16 || rouletteNumber === 18 || rouletteNumber === 19 || rouletteNumber === 21 || rouletteNumber === 23 || rouletteNumber === 25 || rouletteNumber === 27 || rouletteNumber === 30 || rouletteNumber === 32 || rouletteNumber === 34 || rouletteNumber === 36){

    colorsNumber = 'pay red';
     
}else{

    colorsNumber = 'pay black';
}



if( rouletteNumber%2===0){

     odd_even = 'pay Even';

}else{
    odd_even = 'pay odd';

} if(rouletteNumber >=1 && rouletteNumber <=18 ){

    subSet =  'pay 1 - 18';

}else {

    subSet = 'pay 19 - 36';
}


alert(`the spin resulted  in: ${rouletteNumber} 
 pay ${rouletteNumber} 
 ${colorsNumber}
 ${odd_even}
 ${subSet}
 `);


          

