async function loadFile() {  //load file asking for url
    let url = prompt("url?"); 
    let response = await fetch(url);
    if (response.ok) {
      text = responde.text();
      charInText(text, punctuation)
    } else {
      alert("err!")
    }
  }
  
  
  const punctuation = [" ", ",", ".", "1", "2", "3"]
  
  function charInText(text,exclude) {
    text = text.toLowerCase().split("");  //read text letter by letter
    const characters = {};
    for (let char of text) {  //put letters in groups
     if (characters[char] > 0) {
       characters[char] += 1
     } else {
       characters[char] = 1
     }
    }
    excludeChar(characters, exclude);
    let sorted = objectSort(characters);
    alert(JSON.stringify(sorted))  //show groups
  }
  
  
  function excludeChar(obj,arr) {  //exclude given characters
    for (let i in obj) {
      if (arr.find(element => element === i)) {
        delete obj[i]
      }
    }
  }
  
  function objectSort(obj) {   //sort groups(letters) by frequency
    const sortable = [];
    for (let key in obj) {
        sortable.push([key, obj[key]]);
    }
  
    sortable.sort(function(a, b) {
        return b[1] - a[1];
    })
    return sortable
  }  
    
  loadFile()