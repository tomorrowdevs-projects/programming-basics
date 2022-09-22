function readFiles(input) {
 
    const file = input.files[0];
    const typeFile = file.type;
    const error = document.getElementById('error');
    error.innerHTML = '';

    if(typeFile === 'text/plain' || typeFile === 'text/markdown'){
        const reader = new FileReader();

        reader.onload = event => {
            const file = event.target.result;
            const allLines = file.split(/\r\n|\n/,10);
            document.getElementById('content').innerText = allLines.join('\n');
        };

        reader.onerror = event => 
            error.innerText = event.target.error.name;

        reader.readAsText(file);
    }else error.innerText = `ERROR : Insert only text file\n\nType of your file: ${typeFile}`;
};
