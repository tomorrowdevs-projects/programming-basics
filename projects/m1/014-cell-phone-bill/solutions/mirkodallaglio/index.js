let airTime =isNumber(prompt('Enter the minutes of air time for this month', 0));
let nsms = isNumber(prompt("enter this month's SMS number", 0));
let addPlusMinutes = '';
let addPlusSms = '';
let totalImport = 15.44; //base charge + 911 call center support

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
if(airTime && nsms){
    if(airTime > 50){
        let priceMin = (airTime-50)*0.25;
        addPlusMinutes = `\nAdditional for ${airTime-50} minutes: € ${priceMin.toFixed(2)}`;
        totalImport += priceMin;
    };
    if(nsms > 50){
        let priceSms = (nsms-50)*0.15;
        addPlusSms = `\nAdditionalfor ${nsms-50} SMS: € ${priceSms.toFixed(2)}`;
        totalImport += priceSms;
    };

    let tax = totalImport * 0.05;
    totalImport += tax;

    alert(`Cell bill :\nBase charge € 15.00${addPlusMinutes}${addPlusSms}\n911 fee: € 0.44\nTax: € ${tax.toFixed(2)}\nTotal: € ${totalImport.toFixed(2)}`);
}else{
    alert('Something went wrong, you entered one numbers incorrectly ... try again');
};