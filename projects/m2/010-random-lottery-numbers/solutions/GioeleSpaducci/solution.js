let lotteryTicket = [];
let n = Math.floor(Math.random() * 49 + 1);
while (lotteryTicket.length < 6) {
   if (!lotteryTicket.includes(n)) {
   lotteryTicket.push(n);
   }
   n = Math.floor(Math.random() * 49 + 1)
}

alert(lotteryTicket.sort((a,b)=>a-b))