const files = [];

async function loadFile() {
  let url = prompt("url?"); //ask for file
  if (url !== "") { //stop asking file for empty url
    let response = await fetch(url);
    if(response.ok) {  //load file for valid url or show error
      let text = await response.text();
      files.push(text);
      loadFile()  //ask for another file
    } else {
      alert("err!");
      loadFile()
    }
  } else {

  if (files.length > 0) alert(files) //after empty url show all files loaded
  }
}

loadFile()