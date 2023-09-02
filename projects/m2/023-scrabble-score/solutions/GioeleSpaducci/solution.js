let points = {
    1: ["A","E", "I", "L", "N", "O", "R", "S", "T", "U"],
    2: ["D", "G"],
    3: ["B", "C","M", "P"],
    4: ["F"," H", "V", "W", "Y"],
    5: ["K"],
    8: ["J", "X"],
    10: ["Q", "Z"],
  }
  
  let word = "MELA";
  let score = 0;
  word = word.split("");
  
  for (let letter of word) {
    for (let point in points){
      if (points[point].find((element) => element === letter)) score += +point
    }
  }
  alert(score)