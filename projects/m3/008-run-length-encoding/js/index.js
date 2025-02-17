/**
 * Compresses a list in a run-length encoded list
 * @param {Array} listToEncode The list to compress
 * @param {Array} encodedList The compressed list
 * @param {number} index It's used to compare the values between the lists
 * @returns 
 */
function runLengthEncoding(listToEncode, encodedList = [], index = 0){
    if(listToEncode.length === 0){
        return encodedList;
    }

    if (encodedList[index] === listToEncode[0]){
        encodedList[index + 1]++;
    } else {
        index = encodedList.length === 0 ? index : index + 2;
        encodedList[index] = listToEncode[0];
        encodedList[index + 1] = 1;
    }

    return runLengthEncoding(listToEncode.slice(1), encodedList, index);
}


function init(){
    const listToEncode = ["A","A","A","A","A","A","A","A","A","A","A","A","B","B","B","B","A","A","A","A","A","A","B"];

    console.log( runLengthEncoding(listToEncode) ); 
    
    return;
} 
init();