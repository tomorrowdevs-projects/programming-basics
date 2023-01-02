//011

//package
const fs = require('fs');
const process = require('process');

//variable
const folderFiles = '\\name-files-2000-200'

//function read files and elaborate them
const readMultipleFiles = () => {
    fs.promises.readdir(process.cwd()+folderFiles)
        // If promise resolved
        .then(filenames => {

            let dataMtot = []
            let dataFtot = []

            let objM = []
            let objF = []

            // assign to array all the content of the files
            for (let filename of filenames) {
                if ((/M/g).test(filename)){
                    let dataM = fs.readFileSync(process.cwd()+folderFiles+'\\'+filename, {encoding:'utf-8'})
                    dataM = dataM.replaceAll(/[\r]/g, '').replaceAll(/\s\d+/g, '').split('\n')
                    dataMtot = dataMtot.concat(dataM)
                } else {
                    let dataF = fs.readFileSync(process.cwd()+folderFiles+'\\'+filename, {encoding:'utf-8'})
                    dataF = dataF.replaceAll(/[\r]/g, '').replaceAll(/\s\d+/g, '').split('\n')
                    dataFtot = dataFtot.concat(dataF)
                }
            }

            //create unique list
            objM = nameArray(dataMtot)
            objF = nameArray(dataFtot)

            console.log(`Men names between 2000 and 2002:`)
            console.log(objM)
            console.log(`Women names between 2000 and 2002:`)
            console.log(objF)
            
        })
        // If promise is rejected
        .catch((error) => {
            if (error.code === 'ENOENT') {
                console.error(`${folderFiles} folder does not exist`)
              } else {
                console.error(`something went wrong:`, error)
              }
            })
}

//function to only have name without double
const nameArray = array => {
    return[...new Set(array)]
}

readMultipleFiles()