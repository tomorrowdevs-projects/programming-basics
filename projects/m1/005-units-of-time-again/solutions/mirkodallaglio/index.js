
let seconds = prompt('Calculate seconds to D:HH:MM:SS', 'write the seconds here');
 
let days = Math.floor(seconds/(24*3600)); 
seconds -= days*24*3600; 
 
let hours = String(Math.floor(seconds/3600)).padStart(2, '0'); 
seconds -= hours*3600; 
 
let minutes = String(Math.floor(seconds/60)).padStart(2, '0'); 
seconds -= minutes*60; 
 
alert(`${days}:${hours}:${minutes}:${String(seconds).padStart(2, '0')}`); 
