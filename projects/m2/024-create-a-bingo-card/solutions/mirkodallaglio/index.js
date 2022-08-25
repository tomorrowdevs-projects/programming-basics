//the function generates n random numbers (qta) that are all different in a range (min, max), return an array
function randomNumInRange (min, max, qta){
    let result = [];
    for(i=1; result.length < qta; i++){
        let rndNum = Math.floor(Math.random() * (max - min +1) + min);
        if(!result.includes(rndNum)) result.push(rndNum);
    };
    return result;
};

//the function generates a bingo card, dependency: randomNumInRange, output: object
function bingoCard (){
    const numForColumn = 5;
    const card = {
        B: [1,15,numForColumn],
        I: [16,30,numForColumn],
        N: [31,45,numForColumn],
        G: [46,60,numForColumn],
        O: [61,75,numForColumn],
    };
    const result = {};
    for(prop in card){
        result[prop] = randomNumInRange(...card[prop]);
    };
    return result;
};

//the function creates a vertical table from an array object, inputs the html ID of the table tag and the object
function createBingoCard (tableId, obj){
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const table = document.getElementById(tableId);
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
            document.querySelector('tbody tr:nth-child('+i+')').appendChild(td);
            i++;
        });
    };
};

createBingoCard('table', bingoCard());

document.getElementById('generate').addEventListener('click', _ => {
    document.getElementById('table').innerHTML = ''; 
    createBingoCard('table', bingoCard())
});
