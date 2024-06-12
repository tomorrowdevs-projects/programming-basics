const error = document.getElementById('error');
const content = document.getElementById('content');

//called in the onchange in the html inputs, reads a text file, counts how often word are repeated, shows them in order of frequency
function readFiles (input) {
 
    const file = input.files[0];
    const typeFile = file.type;
    error.innerHTML = '';
    content.innerHTML = '';
    
    if (typeFile === 'text/plain' || typeFile === 'text/markdown') {
        
        const reader = new FileReader();

        reader.onload = event => {

            //I transform the text into an array of the single word without punctuation
            const textToArrayWord = event.target.result.replace(/[^\w\s\']|_/g, '').split(/\s+/);

            //I create an object with key = word and value = its frequency, all non letter characters will be discarded
            const objResult = textToArrayWord.reduce((obj, word) => {
                let keyExist = '';

                //if the word already exists in the accumulator regardless of case then match will be true and the key will be saved
                const match = Object.keys(obj).some(key => {
                    if (key.toLowerCase() === word.toLowerCase()) {
                        keyExist = key;
                        return true;
                    } else return false;
                });

                if (word !== '') match ? obj[keyExist] += 1 : obj[word] =1

                return obj;
            }, {});
           
            //transform obj into array in order of frequency
            const sortedResult = Object.entries(objResult).sort((a,b) => {return b[1] - a[1]});
            
            sortedResult.forEach(el => content.innerHTML += el.join('  ==>  ') + '<br>')
        };

        //I show the error occurred during loading
        reader.onerror = event => 
            error.innerText = event.target.error.name;

        reader.readAsText(file);

    //error message for file type other than text
    } else error.innerText = `ERROR : Insert only text file\n\nType of your file: ${typeFile}`;
};