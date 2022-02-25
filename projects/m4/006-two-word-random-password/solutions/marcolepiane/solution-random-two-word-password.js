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
                    
                    let lines = file.match(/\b(\w+)\b/g);

                    let linesText = lines.map(lines =>{
                        return lines.toLowerCase();
                    })

                    //excluse words shorter than 3 characters and accept words equals to or longer than 3 characters
                    let newLinesText = linesText.filter(linesText =>{
                        return linesText.length >= 3;
                    })

                    //generate randomWords
                    let word = newLinesText[Math.floor(Math.random() * newLinesText.length)];
                    let wordTwo = newLinesText[Math.floor(Math.random() * newLinesText.length)];
                    
                    //capitalize every first letter of each word
                    let newWord = word.charAt(0).toUpperCase() + word.slice(1);
                    let newWordTwo = wordTwo.charAt(0).toUpperCase() + wordTwo.slice(1);

                    //put both words together
                    let finalPass = newWord+newWordTwo;

                    //check words.length and show the final word/pass on screen
                        if (finalPass.length >10 || finalPass.length <8){
                            finalPass.slice(-1, 1);
                        } else if( finalPass.length <=10){
                            h2.innerHTML = "The Password is: " + newWord + newWordTwo; 
                        }
                    
            
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