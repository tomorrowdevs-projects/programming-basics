let input= document.querySelector('#input-file');
let btn = document.querySelector('button');
let h2 = document.querySelector('#h2');
let warnMessage = document.querySelector('#warn-message');

btn.addEventListener('click', function(){


    //beginning of promise
    let readText = new Promise((resolve, reject)=>{
        let files = input.files;
      
        //if no files are attached
        if (files.length == 0){
            reject('No files attached: ');

                    //if files are attached
        } else if (files.length == 1){
            

            resolve('One file properly attached');
            
            const file = files[0];

            let reader = new FileReader();

            //loading text file
            reader.onload = (e) => {
                const file = e.target.result;
                const lines = file.split(/\r\n|\n/);
                h2.innerHTML = lines.join('\n');
            }
            
//showing the first part of the text content
            reader.readAsText(file.slice(0, 40));
            
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

