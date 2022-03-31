function remove(arr,n){
    if (arr.length >= 4){
      let newArr = arr.map((x)=>x)
      newArr.sort((a,b)=>a-b);
      newArr.splice(0,n);
      newArr.splice(-1,n);
      newArr.pop();
      alert(arr);
      alert(newArr)
    }
    else alert('error!!')  
  }
  
  let userValue;
  let userValues = [];
  function ask() {
    userValue = prompt('number? (cancel to stop)')
  }  
  ask()
  while (userValue != null) {
    userValues.push(+userValue);
    ask()
  }
remove(userValues,2)