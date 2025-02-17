const prompt = require("prompt-sync")({ sigint: true}) ;
const {displayNames, getNames, readDirectoryFiles} = require( '../../../lib/files-promises-modules.js' ); // For CommonJS environment
const {quickSortNumbers} = require( '../../../lib/sort-modules.js' );
/**
 * It asks the user for the starting year and the ending year which determine the range to analyze. 
 * @param {Array} years range in years that the user can enter for his activities
 * @returns {Array} firts year and last year
 */
function askYears(years){
    if (years.length > 1){
        years = quickSortNumbers(years);
        const firstYear = years[0];
        const lastYear = years[years.length - 1];
        
        console.log(`To find out which names are popular in a period of time you need to enter the first and last year of the period you want to analyze between ${firstYear} and ${lastYear}`);

        const askedFirstYears = parseInt(prompt('Please enter the first year: '));
        const askedLastYears = parseInt(prompt('Please enter the last year: '));

        if (years.includes(askedFirstYears) && years.includes(askedLastYears) && askedFirstYears < askedLastYears){
            return [askedFirstYears, askedLastYears];
        }
    } else {
        console.log('The list of years must contain at least two.')
    }

    return false;
}
/**
 * Filter a list keeping only text files with the .txt extension
 * @param {Array} allFilesName the list of files name to filter
 * @returns {Array} a list of textual files
 */
function getTextFilesName(allFilesName){
    const textFilesName = [];

    for(const fileName of allFilesName){
        if (/\.txt$/.test(fileName)){
            textFilesName.push(fileName);
        }
    }

    return textFilesName;
}
/**
 * Generate a list of integers corresponding to the years present in the file names
 * @param {Array} filesName the list of files name to filter
 * @returns {Array} a list of integers corresponding to the years present in the file names
 */
function getYearsFromFilesName(filesName){
    const years = [];

    for(const fileName of filesName){
        const year = fileName.match(/(\d{4})/);
        if (year[0]){
            years.push(parseInt(year[0]));
        }
    }

    return years;
}


async function init(){
    try {
        const filesPath = '../babynames/';
        const response = await readDirectoryFiles(filesPath);
        const allPopularBoysNames = new Set();
        const allPopularGirlsNames = new Set();

        if (response){
            const filesName = getTextFilesName(response);
            const years = getYearsFromFilesName(filesName);
            const askedYears = askYears(years);

            

            if (askedYears && filesName.length > 1 && years.length > 1){
/* 
                console.log(filesName);
                console.log(years);
                console.log(askedYears);
 */
                for(const fileName of filesName){

                    const year = fileName.match(/(\d{4})/);


                    if (year[0] >= askedYears[0] && year[0] <= askedYears[1]){
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
        }
    } catch (error) {
        console.log('The following error occurred: ', error.message);        
    }

    return;
} 
init();