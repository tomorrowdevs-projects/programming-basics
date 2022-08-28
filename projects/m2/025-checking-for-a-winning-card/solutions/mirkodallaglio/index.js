//global variables
const table = document.getElementById('table');
const buttonChoose = document.getElementById('choose');
const buttonGen = document.getElementById('generate');
const buttonExtract = document.getElementById('extract');
const buttonRestart = document.getElementById('restart');
const buttonAuto = document.getElementById('auto');
const pieces = document.getElementById('pieces');
const container = document.getElementById('container');
let numExtraction = [];     //all numbers drawn
let allCard = [];           //4 object for the 4 chosen cards
let allCardOriginal = [];        
const autoInterval = 1000;  //interval in ms for the button Auto
let cardTmp = {};  // temporary card not yet chosen by the user
const maxNumber = 75;       //the maximum extractable number
const minNumber = 1;        //the minimum extractable number
const numCard = 4;      
const numForRow = 5;        //number of row in the bingo table
const tableWin = {
    COLUMN: false,
    ROW: false,
    DIAGONAL: false,
    BINGO: false,
};
const bingoKeys = ['B','I','N','G','O'];
//End global variables

elementInHTMLContainer('piecesTable', maxNumber, 'div', 'class','','');

cardTmp = createBingoCard('table', bingoCard(maxNumber,numForRow));  

//empties the table and generates a new one
buttonGen.addEventListener('click', _ => resetBingoCard()); 

//when I choose one, I clone the table, add the id ,
//paste it into the container, reset the table,  save the card,
//chosen the card I hide the table generator and show the number extractor and cloning the card array
buttonChoose.addEventListener('click', _ =>{
    const cloneTable = table.cloneNode(true);
    cloneTable.setAttribute('id', 'cloneTable');
    container.appendChild(cloneTable);
    allCard.push(cardTmp);
    resetBingoCard();
    if(container.children.length === numCard) {
        document.getElementById('generateCard').style.display = 'none';
        document.getElementById('containerExtraction').style.display = 'block';
        elementInHTMLContainer('container', numCard, 'p', 'id', 'win');
        allCardOriginal = JSON.parse(JSON.stringify(allCard));
    };
});

//generates a number that is always different from 1 to 75 only if the numbers 
//drawn are less than 75.the generated number is added to the array and to a p created inside pieces
buttonExtract.addEventListener('click', _ => {
    if(numExtraction.length === maxNumber) {pieces.style.display = 'none'; return;};
    pieces.style.display = 'block';
    let numberOk = true;
    while(numberOk){
        const number = randomNumInRange(minNumber,maxNumber,1);
        if(!numExtraction.includes(...number)) {
            numExtraction.push(...number);
            const tableNum = document.querySelectorAll("[class='"+number[0]+"']");
            for (const elem of tableNum) elem.classList.add('numExtract');
            pieces.innerHTML = number;
            replaceValueInArrObj(allCard,number[0],0);
            let result = winnerSearch(allCardOriginal, allCard);
            if(result.length > 0)result.forEach(el => {
                for(prop in tableWin){
                    if(!tableWin[prop] && el[2].endsWith(prop)) {
                        tableWin[prop] = true;
                        document.getElementById('win' + (el[0]+1)).innerHTML += '<p>'+el[2]+'</p>';
                        const winCard = container.querySelector('#cloneTable:nth-child('+(el[0]+1)+')');
                        if(el[1] === 0) {
                            const td = winCard.querySelectorAll('td');
                            for (const elem of td) elem.style = 'background-color: #21df27 !important';
                            document.getElementById('piecesContainer').style.display = 'none';
                            document.getElementById('finish').style.display = 'block';
                        }else {
                            el[1].forEach(num => {
                                const winnerNum = winCard.querySelector("[class='"+num+" numExtract']");
                                winnerNum.style = 'background-color: #21df27 !important';
                                winnerNum.style.borderRadius = '50%';
                            });
                        };
                    };
                };
            });
            numberOk = false;
        };
    };
});

//the auto button simulates the click of the button generate every 
//'var autointerval' ms until all numbers are extracted
auto.addEventListener('click', _ => {
    let setInter = setInterval(_ => {
        if(numExtraction.length === maxNumber-1) clearInterval(setInter);
        buttonExtract.click();
    },autoInterval);
    auto.disabled = true;
});

//reset button: reload the page
buttonRestart.addEventListener('click', _ =>{
    location.reload();
});
