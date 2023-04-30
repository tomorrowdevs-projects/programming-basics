const rollingDice = () => {
    //Simulate rolling a pair of six-sided dice and returning the result
    const side = 12;
    let randomValue = Math.floor(Math.random() * side) + 1
    return randomValue
  }
  
  const simulateRolls = () => {
    const data = []
    //Simulate 1,000 rolls
    while(data.length < 1000){
      // add data in array
      data.push(rollingDice())
    }
    return data
  }
  
  const Main = () => {
    //create an object and check the number of times the number result
    const count = {}
    for (let item of simulateRolls()){
      if(count[item]){
        count[item] += 1
      } else {
        count[item] = 1;
      }
    }
  
    //find the percentage of the number of rolls performed. 
    const diceSimulation = []
    for(let item in count){
      const obj = {
        rolls: item,
        frequency: count[item],
        percentage: ((count[item]  / 1000) * 100).toFixed(2),
      }
      diceSimulation.push(obj)
    }
    
    return diceSimulation
  }
  
  console.log(Main())