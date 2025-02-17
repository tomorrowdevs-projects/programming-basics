let input= document.querySelector('#input-file');
let btn = document.querySelector('button');
let h2 = document.querySelector('#h2');
let warnMessage = document.querySelector('#warn-message');


btn.addEventListener('click', ()=>{


    //fetch data
                const fetchedData = new Promise((resolve, reject) =>{

                let textData = input.files;

                //if no text file is attached
                if(textData.length == 0){
                reject('no files attached');
                
                //if text file is attached
                } else if(textData.length == 1)
                resolve ('File properly attached')

                const file = textData[0];

                let reader = new FileReader();

                //convert file into string
                reader.onload = (e) => {
                    const file = e.target.result;
                    let lines = file.split(/\r\n|\n/);

                    //remove white spaces and typography letters
                    lines = lines.toString().replace(/[^a-zA-Z]+/g, '').toLowerCase();

                    let frequency ={};


                    for(let charac of lines){
                        frequency[charac] = frequency[charac] +1 || 1;
                    }
                    console.log(frequency);
                }

                reader.readAsText(file);


}

)

.then((message)=>{
    console.log(message)
})
.catch((message)=>{
    console.log(message)
})

})