async function loadFile() {  //load file asking for url
  let url = prompt("url?"); 
  let response = await fetch(url);
  if (response.ok) {
    text = await response.text();
    wordInText(text)
  } else {
    alert("err!")
  }
}


function wordInText(text) {  
  text = text
    .toLowerCase()
    .replace(/[^\w\s]|\n/g," ")
    .replace(/\s+/g, " ")
    .split(" ");  //read text word by word
  const characters = {};
  for (let char of text) {  //put words in groups
   if (characters[char] > 0) {
     characters[char] += 1
   } else {
     characters[char] = 1
   }
  }
  let sorted = objectSort(characters);
  alert(JSON.stringify(sorted))  //show groups
}


function objectSort(obj) {   //sort groups(words) by frequency
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