const inputString = prompt('Enter a string to compress').split('');

function compression (arr, tmp= '', number = 1) {
    const result = [];
    if(arr.length === 0) return result.concat(number)

    else{
        const single = arr.splice(0,1)[0];
        if(tmp === ''){
            tmp = single; 
            result.push(single); 
        }else if (single === tmp){
            number++
        }else {
            tmp = single; 
            result.push(number, single);
            number = 1
        }
       return result.concat(compression(arr, tmp, number))
    }
};

alert(`Original: ${inputString.join('')}\nzipped: ${compression(inputString).join('')}`)
