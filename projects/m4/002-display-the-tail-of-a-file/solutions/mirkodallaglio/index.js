function readFiles(input) {
 
    const file = input.files[0];
    const typeFile = file.type;
    const error = document.getElementById('error');
    error.innerHTML = '';

    if(typeFile === 'text/plain' || typeFile === 'text/markdown'){
        const reader = new FileReader();

        reader.onload = event => {
            const file = event.target.result;
            const allLines = file.split(/\r\n|\n/);
            const numLine = allLines.length;
            const last10 = [];
            for(let i = numLine -10; i < numLine; i++) last10.push(allLines[i]);
            document.getElementById('content').innerText = last10.join('\n');
        };

        reader.onerror = event => 
            error.innerText = event.target.error.name;

        reader.readAsText(file);
    }else error.innerText = `ERROR : Insert only text file\n\nType of your file: ${typeFile}`;
};