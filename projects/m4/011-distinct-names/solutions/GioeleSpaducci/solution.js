
//read file
async function loadNames(url, year) {
  let names = [];
  let response = await fetch(url);
  if(response.ok) {
    let text = await response.text();
    names =  text.split("\n");  //take all names from a year
    let newUrl = url.slice(0, url.indexOf(year)) + `${+year +1}` + ".json" ;
    names = names.concat( await loadNames(newUrl, `${+year +1}`))  //put all names from other years together
  }
  return names  
}

async function allNames(url, year) {
  uniqueNames = new Set(await loadNames(url, year));
  alert(Array.from(uniqueNames))  //display unique names
}