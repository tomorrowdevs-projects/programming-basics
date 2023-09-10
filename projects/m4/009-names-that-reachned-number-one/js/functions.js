function getArrGender(arr,arrF,arrM){   
    arr.forEach((item) =>{
        (item[1] == 'F') ? arrF.push(item): arrM.push(item);
    })
}

function getObj(arr){
  const obj = {};
  arr.forEach((item) =>{
    (obj[item[0]]) ?  obj[item[0]] = obj[item[0]] + +item[2] :  obj[item[0]] = +item[2]; 
  })
  return obj;
}

function getMostName(obj,int){
 const mostName = Object.entries(obj)
   .sort((a, b) => b[1] - a[1])
   .slice(0, int)
   .map((item) => item.join(",").replace(",", ": "))
   .join(" , ");
 return mostName
}


module.exports = {getArrGender, getObj, getMostName};