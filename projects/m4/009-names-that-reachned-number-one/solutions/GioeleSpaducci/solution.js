async function namesThatReachedTop(url, year, maxYear) {
    let names =  await loadFile(url, year, maxYear);
    let set = new Set(names);  //delete duplicates
    alert(Array.from(set))  
  }
  
  async function loadFile(url, year, maxYear) { //load first file
    let arr = [];
    const response = await fetch(url);
    if (response.ok && +year <= +maxYear) {
      const text = await response.text();
      let name = topName(text); //select most used name in the year
      arr.push(name);
      let newUrl = url.slice(0, url.indexOf(year)) + `${+year +1}` + ".json" ;
      arr = arr.concat( await loadFile(newUrl, `${+year +1}`, maxYear)) //read next year
    }
    return arr
  }
  
  function topName(text) {
   return text.slice(0, text.indexOf("\n")
   )
  }
  
  namesThatReachedTop("http://localhost:8000/nomi/2000.json" , "2000", "2002")