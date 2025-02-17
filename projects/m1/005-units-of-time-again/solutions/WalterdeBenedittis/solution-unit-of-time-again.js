    let secIns = prompt("Insert seconds, I'll transform them in Days, Hours, Minutes and Seconds format")
    let days = Math.floor(secIns/86400);
    let daysRest = secIns%86400;
    let hours = Math.floor(daysRest/3600);
    let hoursRest = daysRest%3600;
    let minutes = Math.floor(hoursRest/60);
    let minutesRest = hoursRest%60;
    let sec = minutesRest;
    
    hours = ("00" + hours).slice(-2);
    minutes = ("00" + minutes).slice(-2);
    sec = ("00" + sec).slice(-2);
        
    alert("This is the converted result in the format D:HH:MM:SS " + days + " " + hours + " " + minutes + " " + sec);