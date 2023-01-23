//011

//package
const fs = require('fs');
const process = require('process');

//variable
const folderFiles = '\\name-files-2000-2001'

//function read files and elaborate them
const readMultipleFiles = (folderFiles) => {
    return fs.promises.readdir(process.cwd()+folderFiles)
        // If promise resolved
        .then(fileNames => {

            let dataMtot = []
            let dataFtot = []

            // assign to array all the content of the files
            for (let fileName of fileNames) {
                if ((/M/g).test(fileName)){
                    let dataM = fs.readFileSync(process.cwd()+folderFiles+'\\'+fileName, {encoding:'utf-8'})
                    dataM = dataM.replaceAll(/[\r]/g, '').replaceAll(/\s\d+/g, '').split('\n')
                    dataMtot = dataMtot.concat(dataM)
                } else {
                    let dataF = fs.readFileSync(process.cwd()+folderFiles+'\\'+fileName, {encoding:'utf-8'})
                    dataF = dataF.replaceAll(/[\r]/g, '').replaceAll(/\s\d+/g, '').split('\n')
                    dataFtot = dataFtot.concat(dataF)
                }
            }

            //create unique list
            const objM = nameArray(dataMtot).join('\n')
            const objF = nameArray(dataFtot).join('\n')

            
            return (`Men names between 2000 and 2002:\n${objM}
            \nWomen names between 2000 and 2002:\n${objF}`)           
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


readMultipleFiles(folderFiles).then(result => console.log(result))