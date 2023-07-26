// first value string *s*, second value is width of the window in characters *w*
// function will return a new string that includes whatever leading spaces
/*  - If the length of s is greater than or equal to the width of the window then s should be returned.
    - If the length of s is less than the width of the window then a string containing *(len(s) - w)* 
    // 2 spaces followed by s should be returned.*/

function leadingSpace(s, w) {
  if (s.length >= w) {
    return s;
  } else {
    let space = "";
    for (let i = 0; i <= -(s.length - w) / 2; i++) {
      space = space + " ";
    }
    return space + s;
  }
}
console.log(leadingSpace("lorem ipsum", 2));
console.log(leadingSpace("lorem ipsum", 20));