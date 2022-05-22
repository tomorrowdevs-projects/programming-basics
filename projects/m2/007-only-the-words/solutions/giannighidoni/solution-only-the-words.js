let str = prompt('Please, inserta a string');

function onlyWords(str){
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
console.log(str);
}

onlyWords(str);