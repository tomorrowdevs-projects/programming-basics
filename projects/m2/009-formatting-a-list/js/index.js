function formattingArray(a) {
    if (a.length > 1) {
      const lastWord = a.pop(); //["Lemon"]
      const formattedArray = a.join(", ") + " and " + lastWord;
      return formattedArray;
    } else {
      return a[0];
    }
  }
  
  console.log(formattingArray(["apples", "oranges", "bananas", "lemons"])); 