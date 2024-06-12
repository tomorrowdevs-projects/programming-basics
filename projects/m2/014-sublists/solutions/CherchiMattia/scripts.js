const firstList = prompt('Enter the elements of the first list separated by a blank space').split(' ')
const secondList = prompt('Enter the elements of the second list separated by a blank space').split(' ')

const checkSublist = (l1, l2) => {
    if (l1.join('').indexOf(l2.join('')) !== -1) {
        return true;
    } else {
        return false;
    }
}

const result = checkSublist(firstList, secondList)

const getMessage = (bool) => {
    if (bool) {
        alert(`The list:\n ${secondList.join('-')}\n is a sublist of:\n ${firstList.join('-')}`);

    } else {
        alert(`The list:\n ${secondList.join('-')}\n is not a sublist of:\n ${firstList.join('-')}`)
    }
}

getMessage(result);
