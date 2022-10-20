const wordColected = () => {

    let userString;
    const arrString = [];

    while (userString != '') {

        userString = prompt('Enter a string (blamk to quit)');

        arrString.push(userString);
    }

    arrString.pop();

    return arrString;
}

const fisrtList = wordColected();

const removeDuplicate = (list) => {
    const filteredList = list.filter((item, pos) => list.indexOf(item) == pos);

    return filteredList;
}

const newList = removeDuplicate(fisrtList);

alert(`The inserted list is:\n ${fisrtList.join(' - ').toUpperCase()}\nthe list without duplicates is:\n ${newList.join(' - ').toUpperCase()} `)