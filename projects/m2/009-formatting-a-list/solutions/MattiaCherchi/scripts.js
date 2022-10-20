const getInput = () => {

    const list = [];
    let userList
    while (userList != '') {
        userList = prompt('Enter a list of products (blank to quit)');
        list.push(userList);
    }

    list.pop();
    return list;
}


const arrList = getInput()


const getFormatedList = (arr) => {
    let formatedList = '';


    if (arr.length === 0) {

        alert('Pleas enter a products');

    } else if (arr.length === 1) {
        formatedList += arr[0];

    } else if (arr.length === 2) {
        formatedList += arr.join(' and ');

    } else {
        let lastElem = arr.pop();
        formatedList += `${arr.join(', ')} and ${lastElem}`;
    }

    return alert(formatedList);
}

getFormatedList(arrList);