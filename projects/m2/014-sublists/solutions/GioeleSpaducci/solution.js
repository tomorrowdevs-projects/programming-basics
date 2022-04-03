function isSub(arr,subArr) {
    for (let i = 0; i < arr.length; i++) {
      if (subArr[0] === arr[i]) {
        for (let j = 0; j < subArr.length; j++) {
          if (subArr[j] !== arr[i+j]) break
          if (j == subArr.length-1 && subArr[j] === arr[j+i]) return true
        }
      }
    }
    if(subArr.toString() === "") return true
    return false
  }
  
  alert(isSub([1,2,3,4,4,2,3,4,5],[]))
  alert(isSub([1,2,3,4,4,2,3,4,5],[2,3,4,5]))