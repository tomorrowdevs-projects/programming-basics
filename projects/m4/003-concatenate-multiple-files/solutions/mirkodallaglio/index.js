const error = document.getElementById('error');
const content = document.getElementById('content');
const reset = document.getElementById('reset');
const form = document.getElementById('form');
let resultCat = '';

//called in the onchange in the html inputs, check if the files are text, merges the contents of both files
function readFiles (input) {
 
    const file = input.files[0];
    const typeFile = file.type;
    error.innerHTML = '';
    
    if (typeFile === 'text/plain' || typeFile === 'text/markdown') {
        
        const reader = new FileReader();
        //I add a separator to distinguish the 2 files
        const identify = input.id === 'input' ? '<br>----FILE 1----<br>' : '<br>----FILE 2----<br>';

        reader.onload = event => {
            //the first file I load I put it in resultCat
            if (resultCat === '') resultCat += identify + event.target.result
            //add the second to result Cat, hide the inputs and show the reset button
            else {
                form.style.display = 'none';
                reset.style.display = 'block';
                content.innerHTML = resultCat + identify + event.target.result;
            }
        };

        //I show the error occurred during loading
        reader.onerror = event => 
            error.innerText = event.target.error.name;

        reader.readAsText(file);

    //error message for file type other than text
    } else error.innerText = `ERROR : Insert only text file\n\nType of your file: ${typeFile}`;
};

//reset button: I show the form and reset it, empty content and previous result
reset.addEventListener ('click', () => {

    form.reset();
    content.innerHTML = '';
    resultCat = '';
    form.style.display = 'block';
    reset.style.display = 'none';
});