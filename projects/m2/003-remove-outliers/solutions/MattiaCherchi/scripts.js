const getDataColected = () => {

    let userNumber;
    const arrNumber = [];

    while (userNumber != 0) {

        userNumber = parseInt(prompt('Enter 4 number or more(0 to quit)'));

        if (/^[-+]?\d*$/.test(userNumber)) {
            arrNumber.push(userNumber);
        } else {
            alert('Error! Enter a number');
        }

    }

    arrNumber.pop();

    return arrNumber;
}


const startList = getDataColected();

let n;
if (startList.length < 4) {
    alert('Error!the list must contain at least four values ');
} else {
    n = parseInt(prompt('Enter how many largest and smallest items to remove (insert a non-negative integer)'));
}

const removeOutliers = (list, num) => {

    let newList = list
    const listOutliers = []
    let max = 0;
    let min = 0;

    for (let i = 0; i < num; i++) {
        max = Math.max(...newList);
        min = Math.min(...newList);
        listOutliers.push(min, max);
        newList = newList.filter(item => item !== max);
        newList = newList.filter(item => item !== min);
    }

    listOutliers.sort((a, b) => a - b);
    newList.sort((a, b) => a - b);

    return { listOutliers, newList }
}


let result = removeOutliers(startList, n);

alert(`The entered data list is:\n ${startList} \ntlist with outliers:\n ${result.listOutliers.join(', ')} \ndata list to be analyzed:\n ${result.newList.join(', ')}`)



