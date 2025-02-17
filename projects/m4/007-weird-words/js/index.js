const {askFileName, readTheFile} = require( '../../../lib/files-promises-modules.js' ); // For CommonJS environment
/**
 * Generates a list of all words contained in a file
 * @param {string} content the content of a file
 * @returns {Object} list of words and their frequencies
 */
function generateWords(content){
    const words = content.split(/\W+/);

    for (let i = 0; i < words.length; i++) {
        if (words[i].trim() === ''){
            words.splice(i, 1);
        }
    }

    return words;
}
/**
 * Determine whether or not the words in a list follow the “I before E except after C” rule
 * @param {Array} words the words list to check
 * @returns {Array[]} a list of words that follows the rule and a list of words that violates the rule
 */
function iBeforeEExceptAfterC(words){
    let followingRule = [];
    let violatingRule = [];

    if (Array.isArray(words) && words.length > 0){
        let containingIEorEI = new Set();

        words.forEach(word => {
            word = word.toLowerCase();

            if (/ei|ie/.test(word)){
                containingIEorEI.add(word);
            }
        });

        if (containingIEorEI.size > 0){
            containingIEorEI.forEach(word => {
                if (/ie/.test(word)){
                    /cie/.test(word) ? violatingRule.push(word) : followingRule.push(word);                    
                } else {
                    /cei/.test(word) ? followingRule.push(word) : violatingRule.push(word);                    
                }
            });
        }

    }

    return [followingRule, violatingRule];
}


/**
 * Display a list of words that follows or violates the “I before E except after C” rule, preceded by a contextual text.
 * @param {Array} words the words list to display
 * @param {boolean} status true if follows the rule, false if it violates it
 */
function displayWordsStatusList(words, status = true){
    console.log(`${words.length} word/s that ${status === true ? 'follow' : 'violate'} the rule.`);

    if (Array.isArray(words) && words.length > 0){
        words.forEach(word => {
            console.log(word);
        })
    }
}


function init(){
    const fileName = askFileName();

    if (fileName){
        readTheFile(fileName).then(response => {
            if (response){
                const words = generateWords(response);
                const [followingRule, violatingRule] = iBeforeEExceptAfterC(words);

                displayWordsStatusList(followingRule);
                displayWordsStatusList(violatingRule, false);
            }
        }).catch(error => {
            console.log('The following error occurred: ', error.message);
        });
    }

    return;
} 
init();