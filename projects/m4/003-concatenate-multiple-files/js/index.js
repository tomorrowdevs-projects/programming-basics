const fs = require('fs').promises;

let args = process.argv.slice(2);

if (args.length === 0) {
    console.error('Error: No files provided.');
    process.exit(1);
}

function catFiles(files) {
    if (files.length === 0) return;

    let file = files[0];

    fs.readFile(file, 'utf8')
        .then(data => {
            console.log(data);
            catFiles(files.slice(1));
        })
        .catch(err => {
            console.error(`Error: Cannot display file ${file}`);
            catFiles(files.slice(1));
        });
}

catFiles(args);