// 014-sublists

let larger = '1234';
let smaller = '24';

function isSublist(larger, smaller){

//se come input prendo un array lo trasformo in stringa
//let large1String = larger.join('');
//let small1String = smaller.join('');

let solution = larger.indexOf(smaller);

console.log(solution);

if (solution < 0) {
    return false;
} else {
    return true;
}};

console.log(isSublist(larger,smaller))
