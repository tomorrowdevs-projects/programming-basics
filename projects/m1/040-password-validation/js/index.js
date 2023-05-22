const prompt = require ("prompt-sync")();

//8 char, lowercase, uppercase, number
const pass = prompt("Insert a valid password: ");

function passValid(){
    if (pass.length < 8){
        return false;
    }
    if (!/[A-Z]/.test(pass)){
        return false + "2";
    }
    if (!/[a-z]/.test(pass)){
        return false + "3";
    }
    if (!/[\d]/.test(pass)){
        return false + "4";
    }
    return true
}


console.log(passValid());