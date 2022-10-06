const error = get('error');
const content = get('content');
const allWordDiv = get('allWords');
const ruleOk = get('ruleOk');
const exceptions = get('exceptions');

//function to write fewer characters :)
function get (id) {
    return document.getElementById(id);
}

//called in the onchange in the html inputs, reads a text file, counts how often word are repeated, shows them in order of frequency
function readFiles (input) {
 
    const file = input.files[0];
    const typeFile = file.type;
    error.innerHTML = '';
    
    if (typeFile === 'text/plain' || typeFile === 'text/markdown') {
        
        const reader = new FileReader();

        reader.onload = event => {

            //transform the text into an array of the single word without punctuation at the beginning and end of words 
            const textToArrayWord = event.target.result.replace(/[^\w\s\']|_/g, '').toLowerCase().split(/\s+/);

            //filter all words containing ei or i and in a Set to eliminate duplicates then I turn it into an array
            const eiOrIeWord = new Set(textToArrayWord.filter(word => /ei|ie/g.test(word)));
            const allWord = [...eiOrIeWord];

            //filter exceptions: all ei that DO NOT start with C and the ei at the beginning of the word
            const exception = allWord.filter(except => /[^c]ei|^ei|cie/g.test(except));

            //filter the original array for exceptions
            const respectRule = allWord.filter(word => !(new RegExp(exception.join('|')).test(word)));

            //I enter the results on the page
            if (allWord.length) {

                allWordDiv.innerHTML = allWord.join(' - ');
                ruleOk.innerHTML = respectRule.join(' - ');
                exceptions.innerHTML = exception.join(' - ');
                content.classList.remove('hidden');
            } else error.innerText = `I'm sorry but there are no words in your file that contain ie or ei`;
            
            
        };

        //I show the error occurred during loading
        reader.onerror = event => 
            error.innerText = event.target.error.name;

        reader.readAsText(file);

    //error message for file type other than text
    } else error.innerText = `ERROR : Insert only text file\n\nType of your file: ${typeFile ? typeFile : ' undefined...Sorry'}`;
};