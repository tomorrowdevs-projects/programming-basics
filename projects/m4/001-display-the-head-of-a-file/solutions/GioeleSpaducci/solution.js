//ask user for file url
let url = prompt("url?");
//load file for valid user or show error
fetch(url)
.then(function(response) {
  if (!response.ok || url === "") {
    alert("err!")
  } else {
  //excrat and show first lines of the file
  response.text().then((text)=>firstLines(text,10))
  }
})

function firstLines(text, nLines) {
  text = text.split("\n");
  let lines = text.slice(0,nLines)
  alert(lines)
}