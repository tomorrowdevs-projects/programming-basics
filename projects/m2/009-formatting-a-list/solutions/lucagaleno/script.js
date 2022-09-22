//009-formatting-a-list

const listInput = [];
let inputStop = null;
let inputString;

while (!(inputString === inputStop)){

    inputString = prompt('Keep enetering string: ', '');

    if (inputString != inputStop){
        listInput.push(inputString);
    };
};
console.log(listInput);

function formatInput(list) {

    newList = list;

    for(i = 0 ; i < newList.length ; i ++) {
  
        //forse mi sono complicato la vita...
        if (i < (newList.length-2)) {
          
            newList[i]=newList[i] + ", ";

        }else if  (i === (newList.length-1)) {

            newList[i]=newList[i] + "" ;

        }else if (i === (newList.length-2)){

            newList[i]=newList[i] + " and " ;
        }};
    
let sentence = newList.join('');

return sentence;
}
console.log('initiali list entered: '+ listInput);
console.log('this is the follow formatted sentence: '+ formatInput(listInput));

