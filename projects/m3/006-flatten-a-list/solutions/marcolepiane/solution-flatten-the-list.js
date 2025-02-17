if(data === ""){
    return data;

}else if (data[0] === "ul"){

    let list ="";
    let l1 = list.flat();
    let l2 = list.flat().slice(0,1);

    return result = l1 + l2;

}else if(data[0] !== "ul"){
    
    list = "";
    list = data[0];
    let flattened_list = data.flat();
    l2 = flattened_list[0].slice(0,1)
    return l1 + l2;

}