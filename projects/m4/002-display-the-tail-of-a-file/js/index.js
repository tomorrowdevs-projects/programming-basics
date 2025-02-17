const fs = require('fs')

function readLast10Lines (file){
    fs.promises.readFile(file,'utf-8')
    .then(function(data){
        const lines = data.split('\n')
        const last10Lines = lines.slice(-10)
        console.log(last10Lines.join('\n'))
    })
    .catch(function(error){
        console.log(error)
    });
}


const filename = "file.txt"
readLast10Lines(filename)