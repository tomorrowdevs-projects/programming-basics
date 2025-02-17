const userPosition = prompt('Scegli dove posizionarti');
let color = "nero";

if (   userPosition[0] == "a" && (userPosition[1] % 2) == 0 
    || userPosition[0] == "b" && (userPosition[1] % 2) != 0
    || userPosition[0] == "c" && (userPosition[1] % 2) == 0
    || userPosition[0] == "d" && (userPosition[1] % 2) != 0
    || userPosition[0] == "e" && (userPosition[1] % 2) == 0
    || userPosition[0] == "f" && (userPosition[1] % 2) != 0
    || userPosition[0] == "g" && (userPosition[1] % 2) == 0
    || userPosition[0] == "h" && (userPosition[1] % 2) != 0 ){
    color = "bianco";
} 

alert("La casella scelta è di colore " + color);