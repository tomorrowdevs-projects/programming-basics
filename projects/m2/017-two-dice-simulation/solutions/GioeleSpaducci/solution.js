let diceRoll = () => Math.floor(Math.random() * (6 - 1 + 1) + 1);
let rolls = [];
let countedRolls = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
}
for ( let i = 0; i < 1000; i++){
rolls.push(diceRoll(),diceRoll())
}

for (let key in countedRolls) {
  countedRolls[key] = rolls.filter((value) => value === countedRolls[key]).length
}

alert(`1: ${countedRolls.one} (${(countedRolls.one/2000)*100}), 2: ${countedRolls.two} (${(countedRolls.two/2000)*100}), 3: ${countedRolls.three} (${(countedRolls.three/2000)*100}), 4: ${countedRolls.four} (${(countedRolls.four/2000)*100}), 5: ${countedRolls.five} (${(countedRolls.five/2000)*100}), 6: ${countedRolls.six} (${(countedRolls.six/2000)*100})`)