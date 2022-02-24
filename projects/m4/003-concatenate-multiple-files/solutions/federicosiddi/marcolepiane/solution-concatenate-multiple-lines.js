document.getElementById('button').addEventListener('click', loadTxt);

function loadTxt(){

    //fecthing text files

    const fetchFirstText = fetch('text-file.txt');
    const fetchSecondtText = fetch('text-file-2.txt');


    Promise.all([fetchFirstText, fetchSecondtText]).then(response =>{
        return Promise.all(response.map(res => res.text()));

//showing text files on screen

    }).then(([firstText, secondText]) =>{
        h2.innerHTML = firstText + secondText;
    })
}
