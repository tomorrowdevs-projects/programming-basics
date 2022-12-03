const fs = require('fs');

export function isEmptyFile(filePath) {
    const fileNotEmpty = fs.readFileSync(filePath, 'utf8');
    return fileNotEmpty ? it : it.skip;
}

