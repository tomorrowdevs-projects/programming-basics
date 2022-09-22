//export function for test
module.exports = {bingoCard,minMaxAvrg, genNumberExtraction, randomNumInRange, shuffle, replaceValueInArrObj,winnerSearch, autoPlay};


//creates n elements inside an html tag. input: 
//containerId: string - the id of the container
//numElem: number - the number of elements to create
//typeElem: OPTIONAL - string - DEFAULT: div - the type of element (p, div, tr, etc ..), 
//attribute: OPTIONAL - string - DEFAULT: id - the attribute of element (id, class,etc..), which will have a sequential number
//textAttr: OPTIONAL - string - DEFAULT: sequential number - the text for the attribute. 
//textValue: OPTIONAL - string - the text inside element + sequential number. 
function elementInHTMLContainer (containerId, numElem, typeElem, attribute, textAttr, textValue) {
    if(typeElem === undefined) typeElem = 'div';
    if(attribute === undefined) attribute = 'id';
    for(i=1; i <= numElem; i++){
        const div = document.createElement(typeElem);
        if(textValue !== undefined) {
            const txt = document.createTextNode(textValue + i);
            div.appendChild(txt);
        };
        (textAttr === undefined) ?  div.setAttribute(attribute, i) : div.setAttribute(attribute, textAttr + i);
        document.getElementById(containerId).appendChild(div);
    };
};

//shuffle element in arr
function shuffle (arr){
    const arrLength = arr.length;
    const result = [...arr];
    let out = '';
    let casualPos = 0;

    for(i=arrLength-1; i >= 0; i--){
        casualPos = Math.floor(Math.random() * (arrLength - i) + i);
        out = result.splice(i, 1)[0];
        result.splice(casualPos, 0,out);
    };
    return result;
};

//I generate the numbers to extract and mix them
function genNumberExtraction (minNumber, maxNumber){
    const numberForExtraction = [];
    for(i= minNumber; i <= maxNumber; i++) numberForExtraction.push(i);
    return shuffle(numberForExtraction);
}

//the function generates n random numbers (qta) that are all different in a range (min, max), return an array or undefined if qta > max
function randomNumInRange (min, max, qta){
    const result = [];
    if(qta <= max) {for(i=1; result.length < qta; i++){
            const rndNum = Math.floor(Math.random() * (max - min +1) + min);
            if(!result.includes(rndNum)) result.push(rndNum);
        };
    }else return undefined
    return result;
};


//the function generates a bingo card,input: the maximum extractable number, number of table row - output: object
function bingoCard (max, row, keyArr){
    const numForLetter = max / 5;
    const card = keyArr.reduce((acc, el) => ({ ...acc, [el]: []}), {}); 
    let acc = 0;
    for(value of Object.values(card)){
        value.push(acc+=1, acc+=numForLetter-1);
    };
    const result = {};
    for(prop in card){
        result[prop] = randomNumInRange(...card[prop], row);
    };
    return result;
};

//the function creates a vertical table HTML from an array object, inputs the html ID of the table tag and the object
function createBingoCard (tableId, obj){
    const table = document.getElementById(tableId);
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    table.appendChild(thead);
    table.appendChild(tbody);

    for(prop in obj){       //loop to create the th \ tr structure
        const th = document.createElement('th');
        th.appendChild(document.createTextNode(prop));
        thead.appendChild(th);
        const tr = document.createElement('tr');
        tbody.appendChild(tr);
    };
    
    for(value of Object.values(obj)){       //it takes all the values and writes them vertically into the table
        let i = 1;
        value.forEach(el => {
            const td = document.createElement('td');
            td.appendChild(document.createTextNode(el));
            td.setAttribute('class', el);
            table.querySelector('tbody tr:nth-child('+i+')').appendChild(td);
            i++;
        });
    };
    return obj;
};

//delete old table and regen a new
function resetBingoCard(){
    table.innerHTML = "";
    cardTmp = createBingoCard('table', bingoCard(maxNumber, numForRow, bingoKeys));
};

//looks for a value in an array of objects and replaces it with another
//input: the array of object - the value to look for, the value to replace
function replaceValueInArrObj (arr, search, replace){
    arr.forEach((el) => {
        for(value of Object.values(el)){
            const index = value.indexOf(search);
            if(index === -1) continue;
            else value.splice(index, 1, replace);
        };
    });
};

//look for five verticals, horizontals and diagonals across all bingo tables input:
//originArr: original array ,  arr: array modified with 0 in place of the extracted number
//output: array [index od table, array of all win number or 0 if is bingo, message]
function winnerSearch (originArr, arr, keyArr){
    const diagonalArr = [];
    const diagonalOrigin = [];
    const diagonalOrigin2 = [];
    const diagonalArr2 = [];
    const result = [];

    if(maxNumber - numExtraction.length >= 5 && !tableWin.ROW) for(i=0; i < numForRow; i++){
        
        arr.forEach((table, index) => {
            const orizzontalArr = keyArr.map(key => table[key][i])
            if(orizzontalArr.every(element => element === 0)) {
                const rowWin = [];
                for(prop in originArr[index]) rowWin.push(originArr[index][prop][i]);
                result.push([index,rowWin, '!! WIN !! Five- number ROW']);
            };
        });
    };

    arr.forEach((table, index) => {
        if(maxNumber - numExtraction.length >= 5 && (!tableWin.DIAGONAL || !tableWin.COLUMN)) {
            let [x, y] = [0,4];
            keyArr.forEach(key =>{
                diagonalArr.push(table[key][x]);
                diagonalArr2.push(table[key][y]);
                diagonalOrigin.push(originArr[index][key][x]);
                diagonalOrigin2.push(originArr[index][key][y]);
                x++; y--;
                if(table[key].every((elem) => elem === 0)) {
                    result.push([index, originArr[index][key],  '!! WIN !! Five-number COLUMN']);
                }  
            });

            function diagonalResult (arr, originArr){
                const diagonalWin = originArr.splice(0,5);
                if(arr.splice(0,5).every(element => element === 0)) {
                    result.push([index,diagonalWin, '!! WIN !! Five- number DIAGONAL']);
                };
            }
            diagonalResult(diagonalArr, diagonalOrigin);
            diagonalResult(diagonalArr2, diagonalOrigin2);

        };
        if(maxNumber - numExtraction.length >= 25){
                const cardSum = Object.values(table)
                .reduce((acc,b) => acc.concat(b))
                .reduce((acc,b) => acc + b); 
                if(cardSum === 0) result.push([index,cardSum, '!! WIN !! BINGO']);
        };
    });
  
    return result;
};

//runs nGame times a full bingo game, output array [[number of draws to first five], [number of bingo draws]]
function autoPlay(nGame){
    startExec = performance.now();
    statNCallsBingo = [];
    statNCallsFive = [];
   
    for(play= 0; play < nGame; play++){
        let bingo = true;
        for(prop in tableWin) tableWin[prop] = false;
        
        allCard = [];
        allCardOriginal = [];
        cardTmp = bingoCard(maxNumber,numForRow, bingoKeys);
        allCard.push(cardTmp);
        allCardOriginal = JSON.parse(JSON.stringify(allCard));
        numExtraction = genNumberExtraction(minNumber, maxNumber);

        while(bingo){
            const number = numExtraction.splice(0,1);
            replaceValueInArrObj(allCard,number[0],0);
            const result = winnerSearch(allCardOriginal, allCard, bingoKeys);

            if(result.length > 0) result.forEach(el => {
                if (!tableWin.ROW && !tableWin.COLUMN && !tableWin.DIAGONAL){
                    statNCallsFive.push(maxNumber - numExtraction.length)
                };
                for(prop in tableWin){
                    if(!tableWin[prop] && el[2].endsWith(prop)) {
                        tableWin[prop] = true;
                        if(el[1] === 0) {
                            statNCallsBingo.push(maxNumber - numExtraction.length);
                            bingo= false;
                        }    
                    };
                };
            }); 
        };
    };
    endExec = performance.now();
    return [statNCallsFive, statNCallsBingo]
};


//finds the minimum, maximum, and average value in an array of numbers
function minMaxAvrg (arr){
    const avg = arr.reduce((a,b) => a + b, 0) / arr.length;
    return [Math.min(...arr), Math.max(...arr), avg];
};

