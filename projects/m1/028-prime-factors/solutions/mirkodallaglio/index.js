let number = prompt('Prime factorization of an integer, Enter a number:');
let factor = 2;
let allFactor = '';
let n = number;

if(/^[0-9]+$/.test(n) && n >= 2){

    while (factor <= n){
        if(n % factor === 0) {
            allFactor += factor + ' \n';
            n /= factor
        }else factor++;
    }
    alert(`The prime factor of ${number} are:\n${allFactor}`);

}else alert('Write a number greater than 2 ');
