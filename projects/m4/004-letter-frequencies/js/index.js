const fs = require('fs');

let args = process.argv.slice(2);

if(args.length !== 1) {
    console.error('Error: Exactly one command line argument is required.');
    process.exit(1);
}

let filename = args[0];

fs.readFile(filename, 'utf8', (err, data) => {
    if(err) {
        console.error(`Error: Cannot open file ${filename}`);
        process.exit(1);
    }

    let frequencies = new Array(26).fill(0);

    for(let char of data.toLowerCase()) {
        if(char >= 'a' && char <= 'z') {
            frequencies[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
    }

    for(let i = 0; i < 26; i++) {
        console.log(`${String.fromCharCode(i + 'a'.charCodeAt(0))}: ${frequencies[i]}`);
    }
});