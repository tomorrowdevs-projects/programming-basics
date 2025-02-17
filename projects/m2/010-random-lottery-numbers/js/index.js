function ticket(){
    const ticket = [];

    while (ticket.length<6){
        let number = Math.floor(Math.random()*(49-1)+1);
        if (!ticket.includes(number)){
            ticket.push(number);
        }
        
    }
    return ticket.sort((a,b)=>a-b);
}
console.log(ticket())