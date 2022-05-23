let str = prompt('Please, insert a string');


function wordPalindromes(str){
    str = str.split('');
    let punt = ',.?-_""!;:';
    punt = punt.split('');

    str.forEach((elStr, index) => {
        punt.forEach(elPunt => {
            if(elPunt === elStr){
                str.splice(index, 1);
            }
        })
    })

str = str.join('').split(' ');

let middIn = (str.length - 1) / 2;
let feed = 0;

for(let i = 1; middIn - i >= 0; i++){
    if(str[middIn - i] === str[middIn + i]){
        feed++;
    }
}

if(feed === middIn){
    return true;
} else {
    return false;
}

}

let test = wordPalindromes(str);

console.log(test);