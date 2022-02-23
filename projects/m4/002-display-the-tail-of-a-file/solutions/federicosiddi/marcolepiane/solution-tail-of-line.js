let input= document.querySelector('#input-file');
let btn = document.querySelector('button');
let h2 = document.querySelector('#h2');
let warnMessage = document.querySelector('#warn-message');

btn.addEventListener('click', function(){

    let readText = new Promise((resolve, reject)=>{
        let files = input.files;
      
        if (files.length == 0){
            reject('No files attached: ');

        } else if (files.length == 1){
            
            resolve('One file properly attached');
            
            const file = files[0];

            let reader = new FileReader();

            reader.onload = (e) => {
                const file = e.target.result;
                const lines = file.split(/\r\n|\n/);
                h2.innerHTML = lines.join('\n');
            }

            //shows the last lines of the text. The parameters might change according to the text's length/size

            reader.readAsText(file.slice(400, 1000));
            
        }
            })


        readText
        .then((message)=>{
            warnMessage.textContent = message;

        })
        
        .catch((message)=>{
            warnMessage.textContent = message + "The file doesn't exist. Please attach one";
        })

})