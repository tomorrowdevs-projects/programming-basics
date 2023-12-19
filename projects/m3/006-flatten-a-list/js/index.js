/**
 * Flattens a list
 * @param {Array} listToFlatten The list to flatten
 * @returns {string} The flattened list
 */
function flattenList(listToFlatten){
    if(listToFlatten.length === 0){
        return listToFlatten;
    }

    const l1 = Array.isArray(listToFlatten[0]) ? flattenList(listToFlatten[0]) : [listToFlatten[0]];
    const l2 = flattenList(listToFlatten.slice(1));

    return l1 + l2;
}

function init(){
    const listToFlatten = [1, [2, 3], [4, [5, [6, 7]]], [[[8], 9], [10]]];

    console.log( flattenList(listToFlatten) );

    return;
}
init();