const priceBread = 3.49;
const discounted = priceBread * 0.6;
let numBread = isNumber(prompt('receipt backer', 'write the number old loaves of bread you bought'));

function isNumber (i){
    
    let parInt = parseInt(i);

    if(isNaN(parInt) || parInt === '' || parInt === null){
        return false;
    }
    if(i.length > parInt.toString().length){
        return false;
    }
    return parInt;
};

let sum = (priceBread * numBread).toFixed(2);
let totalPrice = (discounted * numBread).toFixed(2);
let totalDiscounted = (sum - totalPrice).toFixed(2);

if(!numBread){
    alert('Qualcosa è andato storto, non hai inserito correttamente il numero... riprova');
}else{
    alert(`       Total price = ${sum}\n      Discounted = ${totalDiscounted}\n       Your price =  ${totalPrice}`);
}



