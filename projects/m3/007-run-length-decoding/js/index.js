/**
 * Decompresses a run-length encoded list
 * @param {Array} listToDecode The list to decompress
 * @param {Array} decodedList The uncompressed list
 * @param {number} index It's used to compare the values between the lists
 * @returns 
 */
function runLengthDecoding(listToDecode, decodedList = [], index = 0){
    if(listToDecode.length <= 1){
        return decodedList;
    }

    if( listToDecode[1] > 0 ){
        listToDecode[1]--;
        decodedList.push(listToDecode[0]);
    } else {
        return runLengthDecoding(listToDecode.slice(2), decodedList, index);
    }

    return runLengthDecoding(listToDecode, decodedList, index);
}

function init(){
    const listToDecode = ["A",12,"B",4,"A",6,"B",1];

    console.log( runLengthDecoding(listToDecode) );

    return;
} 
init();