const {displayNames, getNames, readDirectoryFiles} = require( '../../../lib/files-promises-modules.js' ); // For CommonJS environment


async function init(){
    try {
        const filesPath = '../babynames/';
        const response = await readDirectoryFiles(filesPath);
        const allBoysNames = new Set();
        const allGirlsNames = new Set();

        if (response){
            for(const fileName of response){
                if (/\.txt$/.test(fileName)){
                    const names = await getNames(filesPath + fileName);
                    if (names.hasOwnProperty('boys')){
                        allBoysNames.add(names.boys);
                    }

                    if (names.hasOwnProperty('girls')){
                        allGirlsNames.add(names.girls);
                    }
                }
            }

            displayNames(allBoysNames, 'All names for boys:');
            displayNames(allGirlsNames, 'All names for girls:');
        }
    } catch (error) {
        console.log('The following error occurred: ', error.message);        
    }

    return;
} 
init();