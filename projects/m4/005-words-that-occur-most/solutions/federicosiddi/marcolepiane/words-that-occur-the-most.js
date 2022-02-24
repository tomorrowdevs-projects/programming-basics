let input= document.querySelector('#input-file');
let btn = document.querySelector('button');
let h2 = document.querySelector('#h2');
let warnMessage = document.querySelector('#warn-message');


btn.addEventListener('click', ()=>{

                const fetchedData = new Promise((resolve, reject) =>{

                let textData = input.files;
                console.log(textData);

                if(textData.length == 0){
                reject('no files attached');

                } else if(textData.length == 1)
                resolve ('File properly attached')

                const file = textData[0];

                let reader = new FileReader();

                reader.onload = (e) => {
                    
                    const file = e.target.result;
                    
                    // remove typography letters
                    
                    let lines = file.match(/\b(\w+)\b/g);


                    //convert all letters into lowercase
                    let linesText = lines.map(lines =>{
                        return lines.toLowerCase();

                        
                    })

                     
                        let frequency ={};
                    
                        //creating a list of words that occur the most
                        for(let word of linesText){
                            frequency[word] = frequency[word] +1 || 1;
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