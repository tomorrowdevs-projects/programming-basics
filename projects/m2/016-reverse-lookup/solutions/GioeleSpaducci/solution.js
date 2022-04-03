let numbers = {
    uno : 1,
    due : 2,
    tre : 3,
    dueAncora : 2,
    quattro : 4,
  }
  function reverseLookup(obj,value) {
    let keys = [];
    for (let key in obj) {
      if (obj[key] === value) keys.push(key)
    }
    return keys
  }
  alert(reverseLookup(numbers, 2));
  alert(reverseLookup(numbers, 0));
  alert(reverseLookup(numbers, 4))