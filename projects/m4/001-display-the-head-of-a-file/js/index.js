const fs = require('fs');

const filename = process.argv[2];

if (!filename) {
    console.error('Please provide a filename as a command line argument.');
    process.exit(1);
}

try {

    const content = fs.readFileSync(filename, 'utf-8');

    const lines = content.split('\n');

    const first10Lines = lines.slice(0, 10);

    console.log(first10Lines.join('\n'));
} catch (error) {
    console.error(`There was an error reading the file: ${error.message}`);
}