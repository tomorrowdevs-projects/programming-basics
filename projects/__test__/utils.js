const fs = require('fs');

function isEmptyFile(filePath) {
    const fileNotEmpty = fs.readFileSync(filePath, 'utf8');
    return fileNotEmpty ? it : it.skip;
}

module.exports = {
    isEmptyFile
}

