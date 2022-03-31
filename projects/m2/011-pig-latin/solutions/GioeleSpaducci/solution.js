let str = prompt("string?");
let vowels = ["a","e","i","o","u"];

let arr = str.split(" ");
for (let key of arr) {
  let newWord = "";
  if (vowels.includes(key[0])) {
    arr.splice(arr.indexOf(key), 1, key + "way")
  }
  else if (!vowels.includes(key[0])) {
    for (i=1; i < key.length; i++) {
      if (vowels.includes(key[i])) {
        newWord = key.slice(0,i);
        newWord = key.slice(i,key.length) + newWord;
        break
      }
    }
    arr.splice(arr.indexOf(key), 1, newWord + "ay")
  }
}
alert(arr.join(" "))