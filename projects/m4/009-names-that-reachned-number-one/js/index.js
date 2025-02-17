const {displayNames, getNames, readDirectoryFiles} = require( '../../../lib/files-promises-modules.js' ); // For CommonJS environment


async function init(){
    try {
        const filesPath = '../babynames/';
        const response = await readDirectoryFiles(filesPath);
        const allPopularBoysNames = new Set();
        const allPopularGirlsNames = new Set();

        if (response){
            for(const fileName of response){
                if (/\.txt$/.test(fileName)){
                    const names = await getNames(filesPath + fileName, true);
                    if (names.hasOwnProperty('boys')){
                        allPopularBoysNames.add(names.boys);
                    }

                    if (names.hasOwnProperty('girls')){
                        allPopularGirlsNames.add(names.girls);
                    }
                }
            }

            displayNames(allPopularBoysNames, 'Most popular names for boys:');
            displayNames(allPopularGirlsNames, 'Most popular names for girls:');
        }
    } catch (error) {
        console.log('The following error occurred: ', error.message);        
    }

    return;
} 
init();