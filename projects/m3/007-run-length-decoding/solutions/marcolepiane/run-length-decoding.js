function compress(str){
    let result = "";
    let count = 0;

    for (let i =0; i< str.length; i++){
        count ++;
        if(str[i] !=str[i]+ 1){
            result = result + string[1] + count;
            count=0;
        }
    }
}

compress('abbbeefff');