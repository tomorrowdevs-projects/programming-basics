class Hat {
  static balls(arr) {  //create content from arguments
    let cont = [];
    if (arr.length > 1) {  
      cont = Hat.balls([arr[0]]);  //execute function for first number
      cont = cont.concat(Hat.balls(arr.slice(1)))  //repeat for other numbers
    } else {
      for (let i = 0; i < Object.values(arr[0])[0]; i++) {  //take first number, put equivalent number of elements in array
        cont.push(Object.keys(arr[0])[0])
      }
    }
    return cont
  }
  constructor(...args) {
    
    this.content = Hat.balls(args);
  }
  draw(n, arr = this.content) { //take a number and store it in an array n times
    const pool = arr.map((x)=>x);
    let drawn = [];
    if (n > 0) {
      drawn = pool.splice(Math.floor(Math.random() * pool.length), 1);
      drawn = drawn.concat(this.draw(n-1, pool))
    }
    return drawn
  }
}

function experiment(hat, target, ballsNumber, runs) {
  let hits = 0;
  target = Hat.balls(target);
  for (let i = 0; i < runs; i++) {
    let draw = hat.draw(ballsNumber);  //draw balls
    if (target.every((ball)=> draw.find((item)=> item === ball))) hits +=1  //check if it confirms target, return response
  }
  return (hits/runs * 100) + "%" //calculate probability
}