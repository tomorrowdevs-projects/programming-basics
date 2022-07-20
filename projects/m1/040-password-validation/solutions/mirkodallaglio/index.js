let password = prompt('Enter password:');

function validatePassword (password){
    if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(password)) return true;
    else return false;
};

if(validatePassword(password)) alert('Good Password !');
else alert('Password not passed !')