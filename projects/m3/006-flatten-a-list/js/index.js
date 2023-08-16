function flattenList(array){
    const newArray = []

    if (array.length < 0){
        return []     
    }

    for(let i = 0; i < array.length; i++){
        if(Array.isArray(array[i])){
            const nestedArray = flattenList(array[i]);
            newArray.push(...nestedArray)
            
        }else{
            newArray.push(array[i])
        }
 
    }
    return newArray
}

const array = [1, [2, 3], [4, [5, [6, 7]]], [[[8], 9], [10]]]
console.log(flattenList(array))