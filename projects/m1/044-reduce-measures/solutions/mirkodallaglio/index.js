let unitMeasure = prompt('Choose the unit of measureEnter\n1 for cup,\n2 for tablespoons,\n3 for teaspoons');

function calcMeasure (num, unitMeasure){
    let result = [];
    let numTea = 0;

    if(unitMeasure === '1') return result += `${num} cup`;
    else if(unitMeasure === '2') numTea =  num * 3;
    else numTea = num;

    let change = numTea % 48;
    let nCup = (numTea - change)/48;
    let nTea = change % 3;
    let nTable = (change - nTea)/3;

    if(nCup) result.push(`${nCup} cup`);
    if(nTable) result.push(`${nTable} tablespoons`);
    if(nTea) result.push(`${nTea} teaspoons`);

    return result.join(' + ');
};

if(/^([1-3])$/.test(unitMeasure)){
    let nameUnit = '';
2
    switch(unitMeasure){
        case '1': nameUnit = 'cup'; break;
        case '2': nameUnit = 'tablespoons'; break;
        case '3': nameUnit = 'teaspoons'; break;
    }
    let num = prompt(`Enter the number of ${nameUnit}`);

    if(/^([0-9])+$/.test(num)) alert(`${num} ${nameUnit} ===> ${calcMeasure(num, unitMeasure)}`);
    else alert(`${num} isn't a valid number!!`);

}else alert('you can only choose 1, 2 or 3');