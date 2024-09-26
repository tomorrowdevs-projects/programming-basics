// Modules
const readline = require('readline');
const fs = require('fs');
const fsp = require('node:fs/promises');
const path = require('path');

getFilesList('../babynames', ['.txt']).then( data => {
    const callbacks = [];
    data.files.forEach( f => {
        callbacks.push(readFile(`${data.dir}/${f}`));
    });

    Promise.all(callbacks).then( output => {
        const mostPopularNames = {
            M: [],
            F: [],
        };

        output.forEach( year => {
            ['M', 'F'].forEach( gender => {
                if(!mostPopularNames[gender].includes(year[gender].name)) {
                    mostPopularNames[gender].push(year[gender].name);
                }
            })
        });

        console.log(mostPopularNames);
    });
});


/* FUNCTIONS */

/**
 * 
 * @param {string} dir - The path of the directory
 * @param {array} [exceptions = null] - retrieve only files with the desired extensions
 * @returns {array} files - the list files in the directory
 */
async function getFilesList(dir, extensions = null) {
    let files = await fsp.readdir(dir);
    if(Array.isArray(extensions)) files = files.filter( f => extensions.includes(path.extname(f)) );
    return {
        dir,
        files
    };
}

async function readFile(filename) {
    return new Promise( resolve => {
        const yobData = {
            year: path.basename(filename).slice(3, 7),
        };

        const stream = readline.createInterface({
            input: fs.createReadStream(filename),
        });

        stream.on('line', line => {
            const nameInfoArr = line.split(',');

            if(nameInfoArr[0] != undefined) {
                let putOnData = true;
                if(yobData.hasOwnProperty(nameInfoArr[1])) {
                    putOnData = yobData[nameInfoArr[1]].number < nameInfoArr[1];
                }

                if(putOnData) {
                    yobData[nameInfoArr[1]] = {
                        name: nameInfoArr[0],
                        number: parseInt(nameInfoArr[2]),
                    };
                }
            }
        });

        stream.on('close', () => resolve(yobData));
    })
}