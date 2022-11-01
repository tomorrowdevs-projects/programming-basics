const month = prompt("Di che mese vuoi sapere la lunghezza in giorni?").toLowerCase();

const day30 = ['NOVEMBRE', "APRILE", "GIUGNO", "SETTEMBRE"];

if(day30.includes(month))
    alert(month.toLocaleUpperCase() + " è un mese di 30 giorni.");
else if(month == "FEBBRAIO")
    alert(month.toLocaleUpperCase() + " è un mese bisestile, quindi può essere di 28 o di 29 giorni.");
else
    alert(month.toLocaleUpperCase() + " è un mese di 31 giorni.");

