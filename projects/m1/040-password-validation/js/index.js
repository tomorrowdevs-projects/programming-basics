const prompt = require ("prompt-sync")();

//8 char, lowercase, uppercase, number
const pass = prompt("Insert a valid password: ");

function passValid(){
    if (pass.length < 8){
        return false;
    }
    if (!/[A-Z]/.test(pass)){
        return false;
    }
    if (!/[a-z]/.test(pass)){
        return false;
    }
    if (!/[\d]/.test(pass)){
        return false;
    }
    return true
}


console.log(passValid());