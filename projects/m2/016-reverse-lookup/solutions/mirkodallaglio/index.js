const dictionary = {
    'dog': 1,
    'cat': 2,
    'mouse': 3,
    'zebra': 4,
    'bird': 3,
    'horse': 5,
    'lion': 33,
    'snake': 7,
    'whale': 8,
    'elephant': 10,
    'giraffe': 3,
    'spider': 11,
    'crocodile': 3,
    'marmot': 1,
    'shark': 37,
    'zebra': 55,
}

let value = Number(prompt('Enter a number'));

function reverseLookup (dict, val){
    const result = [];
    for (const [key, value] of Object.entries(dict)) {
        if(value === val)result.push(key);
    };
    return result;
};

if(isNaN(value)) alert('Please enter a number only');
else {
    if(reverseLookup(dictionary,value).length === 0) alert('Sorry, no matches !');
    else alert(`Matches :\n${reverseLookup(dictionary,value).join(' - ')}`);
};