
const DISCOUNTCode = 0.6;
const STARTINPrice = 4.95;
const SPACE = ' ';
const DefaultSpace = 10;


function getSpace(input,string){
    const inputStr=`${input}`;
    if(string.length >= inputStr.length){
        return DefaultSpace + (string.length - inputStr.length)
    }

    return DefaultSpace + (inputStr.length - string.length);
}

console.log(`price${SPACE.repeat(DefaultSpace)}discount${SPACE.repeat(DefaultSpace)}newPrice`);
let result ='';




for(let i = STARTINPrice; i<= 24.95; i+= 5){
       const discountPrice = DISCOUNTCode * i;
       
       const newPrice = i - discountPrice;
        result+=`${i.toFixed(2)}${SPACE.repeat(getSpace(i.toFixed(2),'discount'))}${discountPrice.toFixed(2)}${SPACE.repeat(getSpace(discountPrice.toFixed(2),'newPrice'))}${newPrice.toFixed(2)}\n`;

}

console.log(result);







/*Write a program that uses a loop to generate a table for  $4.95, $9.95, $14.95, $19.95 and $24.95 that shows:
- the original price
- the discount amount
- the new price for purchases 
*/