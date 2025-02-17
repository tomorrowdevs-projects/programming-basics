//creates n elements inside an html tag. input: containerId: string - the id of the container
//numElem: number - the number of elements to create
//typeElem: OPTIONAL - string - DEFAULT: div - the type of element (p, div, tr, etc ..), 
//attribute: OPTIONAL - string - DEFAULT: id - the attribute of element (id, class), which will have a sequential number
//textAttr: OPTIONAL - string - DEFAULT: sequential number - the text for the attribute. 
//textValue: OPTIONAL - string - the text inside element + sequential number. 
function elementInHTMLContainer (containerId, numElem, typeElem, attribute, textAttr, textValue) {
    if(typeElem === undefined) typeElem = 'div';
    if(attribute === undefined) attribute = 'id';
    for(i=1; i <= numElem; i++){
        const div = document.createElement(typeElem);
        if(textValue !== undefined) {
            let txt = document.createTextNode(textValue + i);
            div.appendChild(txt);
        };
        (textAttr === undefined) ?  div.setAttribute(attribute, i) : div.setAttribute(attribute, textAttr + i);
        document.getElementById(containerId).appendChild(div);
    };
};


//the function generates n random numbers (qta) that are all different in a range (min, max), return an array
function randomNumInRange (min, max, qta){
    let result = [];
    for(i=1; result.length < qta; i++){
        let rndNum = Math.floor(Math.random() * (max - min +1) + min);
        if(!result.includes(rndNum)) result.push(rndNum);
    };
    return result;
};

//the function generates a bingo card,input: the maximum extractable number, number of table row - output: object
function bingoCard (max, row){
    const numForLetter = max / 5;
    let card = bingoKeys.reduce((acc, el) => ({ ...acc, [el]: []}), {}); 
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

//the function creates a vertical table from an array object, inputs the html ID of the table tag and the object
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
    cardTmp = createBingoCard('table', bingoCard(maxNumber, numForRow));
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
function winnerSearch (originArr, arr){
    let orizzontalArr = [];
    let diagonalArr = [];
    let diagonalOrigin = [];
    let diagonalOrigin2 = [];
    let diagonalArr2 = [];
    let result = [];
    let idex = 0;
    for (let i = 0; i < numForRow; i++) {
        
        arr.forEach((el, index) => {
            let [x, y] = [0,4];
            bingoKeys.forEach(ele =>{
                orizzontalArr.push(el[ele][idex]);
                diagonalArr.push(el[ele][x]);
                diagonalArr2.push(el[ele][y]);
                diagonalOrigin.push(originArr[index][ele][x]);
                diagonalOrigin2.push(originArr[index][ele][y]);
                x++; y--;
                if(el[ele].every((elem) => elem === 0)) result.push([index, originArr[index][ele],  '!! WIN !! Five-number COLUMN']);
            });
            const rowWin = diagonalOrigin.splice(0,5);
            if(diagonalArr.splice(0,5).every(element => element === 0)) {
                
                result.push([index,rowWin, '!! WIN !! Five- number DIAGONAL']);
            };
            const rowWin2 = diagonalOrigin2.splice(0,5);
            if(diagonalArr2.splice(0,5).every(element => element === 0)) {
                
                result.push([index,rowWin2, '!! WIN !! Five- number DIAGONAL']);
            };
            if(orizzontalArr.splice(0,5).every(element => element === 0)) {
                const rowWin = []
                for(prop in originArr[index]) rowWin.push(originArr[index][prop][idex]);
                result.push([index,rowWin, '!! WIN !! Five- number ROW']);
            };
        });
    idex++;
    };
    if(numExtraction.length >= 25){
        arr.forEach((el, index) => {
            let cardSum = Object.values(el)
            .reduce(function(a,b) { return a.concat(b) })
            .reduce(function(a,b) { return a + b }); 
            if(cardSum === 0) result.push([index,cardSum, '!! WIN !! BINGO']);
        });
    };
    return result;
};