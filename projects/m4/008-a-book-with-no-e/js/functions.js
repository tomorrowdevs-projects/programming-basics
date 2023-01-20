function getProportion(data){
  const result = data
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split('');
    
  const alphabet = {}
  
  for(i = 97; i < 123; i++){
    alphabet[String.fromCharCode(i)] = 0;
  }

  result.forEach((char) =>{
      
    alphabet[char] += 1;
  })
  
  for(const char in alphabet){
    alphabet[char] = +((alphabet[char]/result.length)*100).toFixed(2);
  }
 
  const percent = Object.entries(alphabet).sort((a,b) => a[1] - b[1]);

  const min = percent[0][1];

  percent.forEach(elem => {
    console.log(`Letter: ${elem[0]} : ${elem[1]} %`);
  });
  
 const minValue = percent.filter((item) => item[1] == min).map((char) => char[0]).join(', ');
 console.log(`\nThe less frequent letters are:\n${minValue}`);

}

module.exports = getProportion;
