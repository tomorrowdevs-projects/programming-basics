let baseIn = prompt('Enter the base of your number');
let num = prompt('Enter your number');
let baseOut = prompt('On what basis should I convert it?');
let controlRegex = {
    from2To16: /^([2-9]|1[0-6])$/,
    binary: /^[0-1]+$/,
    hexa: /^[0-9a-fA-F]+$/,
    base3To10: baseIn => new RegExp(`^[0-${baseIn-1}]+$`),
    base11To15: /^[0-9a-zA-Z]+$/,
};

function numConvert (baseIn, baseOut, num){
    return parseInt(num, baseIn).toString(baseOut).toUpperCase();
};

if(controlRegex.from2To16.test(baseIn) && controlRegex.from2To16.test(baseOut)){

    if(baseIn === '2' && controlRegex.binary.test(num) || baseIn === '16' && controlRegex.hexa.test(num) 
        || (baseIn > 2 && baseIn < 11 && controlRegex.base3To10(baseIn).test(num)) 
        || baseIn > 10 && baseIn < 16 && controlRegex.base11To15.test(num)) 

        alert(`The number ${num} /base ${baseIn} ===> ${numConvert(baseIn,baseOut,num)} /base ${baseOut}`);

    else alert("You havn't entered the number correctly");

}else alert('For base enter number from 2 to 16 ');